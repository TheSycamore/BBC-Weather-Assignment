const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const request = require('request')
const availableCities = require('./citiesAvailable.js')
const locations = require('./cityLocations.js')
// TODO: move key to config
const darkskyAPIKey = '41088133806b2bf97bed664093f318c1'

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

/* ===================Routes==================== */

app.get('/api/v1/availableCities', (req, res) => {
  // console.log('Request made for available cities')
  res.send(availableCities)
})

app.get('/api/v1/city', (req, res) => {
  // console.log('Request made for weather of city:')
  // console.log(`    /api/v1/city?city=${req.query.city}`)

  if (validateRequest(req, res)) {
    fetchWeather(req, res)
  }
})

app.get('/api/v1/test', (req, res) => {
  return res.status(400).json({
    status: 400,
    message: 'Sorry the city you requested is not available.',
    moreInfo:
      'The request does not contain a valid API query parameter. Error location: app.get(/api/v1/test'
  })
})

/* ==================Functions================== */

function validateRequest(req, res) {
  // console.log(req.query.city) // = new-york
  
  // Check req.query exists in locations.city
  const found = locations.some(function(el) {
    return el.city === req.query.city
  })
  if (!found) {
    // console.log('invalid API query param')
    return res.status(400).json({
      status: 400,
      message: 'Sorry the city you requested is not available.',
      moreInfo:
        'The request does not contain a valid API query parameter. Error location: vaidateRequest()'
    })
  } else {
    return true
  }
}

function fetchWeather(req, res) {
  const url = getAPIUrl(req.query.city)
  new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
        // console.log('valid response from darksky received')
        resolve(JSON.parse(body))
      }
    )
  })
    .then(body => {
      // console.log(body)
      const responseObject = filterAPIResponse(body)
      // console.log(responseObject)
      res.send(JSON.stringify(responseObject))
    })
    .catch(err => console.log(err))
}

function getAPIUrl(city) {
  const coordinates = getCoordinates(city)
  return 'https://api.darksky.net/forecast/' +
    darkskyAPIKey +
    '/' +
    coordinates +
    '?exclude=minutely,hourly,daily,alerts&units=si&lang=en'
}

function getCoordinates(city) {
  const filteredValue = locations.filter(item => {
    return item ? item.city === city : ''
  })
  return filteredValue[0].coordinates
}

function filterAPIResponse(body) {
  // console.log('filterAPIResponse() called')
  const responseObject = {}
  responseObject.summary = body.currently.summary
  responseObject.temperature = body.currently.temperature
  responseObject.icon = body.currently.icon
  return responseObject
}
