<template>
  <div id="container">
    <site-header :cities="cities" :selected-city="selectedCity" @cityClicked="cityClicked" />

    <main>
      <errors :error="response.error" />
      <results />
    </main>
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import Errors from '~/components/Errors.vue'
import Results from '~/components/Results.vue'

export default {
  components: {
    SiteHeader,
    Errors,
    Results
  },
  data: () => {
    return {
      apis: {
        fetchCities: '/api/v1/availableCities',
        fetchWeather: '/api/v1/city?city=',
        errorTest: '/api/v1/test'
      },
      cities: [],
      selectedCity: '',
      response: {
        data: {},
        error: {
          code: '',
          message: '',
          moreInfo: '',
          status: ''
        }
      }
    }
  },
  mounted: function() {
    this.fetchCities()
  },
  methods: {
    async fetchCities() {
      this.clearResults()
      await this.$axios
        .$get(this.apis.fetchCities)
        // .$get(this.apis.errorTest)
        .then(res => {
          // console.log(res)
          this.cities = res
        })
        .catch(e => {
          this.response.error.message =
            'Sorry! Could not retrieve the list of cities.'
          this.response.error.status = 500
        })
    },
    async cityClicked(city) {
      this.clearResults()
      this.setSelected(city)
      await this.$axios
        .$get(this.apis.fetchWeather + city.slug)
        // .$get(this.apis.errorTest)
        .then(res => {
          // console.log(res)
          this.response.data = res
        })
        .catch(e => {
          console.log(e.response.data)
          this.response.error.status = e.response.data.status
          this.response.error.message = e.response.data.message
          this.response.error.moreInfo = e.response.data.moreInfo
        })
    },
    setSelected(city) {
      this.selectedCity = city.name
    },
    clearResults() {
      this.selectedCity = ''
      this.response = this.initialResponse()
    },
    initialResponse() {
      return {
        data: {},
        error: {
          code: '',
          message: '',
          moreInfo: '',
          status: ''
        }
      }
    }
  }
}
</script>

<style>
</style>
