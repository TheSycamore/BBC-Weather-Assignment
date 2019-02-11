<template>
  <div id="container">
    <site-header :cities="cities" @cityClicked="cityClicked" />

    <main>
      <errors />
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
        fetchWeather: '/api/v1/city?city='
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
    cityClicked(city) {
      console.log(city)
    },
    setSelected(city) {},
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
