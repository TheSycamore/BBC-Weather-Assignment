<template>
  <div id="container">
    <site-header />

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
    async fetchCities() {},
    async cityClicked(city) {},
    setSelected(city) {},
    clearResults() {}
  }
}
</script>

<style>
</style>
