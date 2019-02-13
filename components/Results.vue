<template>
  <div v-if=" selectedCity " class="Results">
    <h2 class="Results__CityTitle">
      {{ selectedCity }}
    </h2>
    
    <div v-if=" hasResult " class="CurrentWeather">
      <img :src="iconPath" class="CurrentWeather__Icon">
      <div class="CurrentWeatherRight">
        <span class="CurrentWeather__Temperature">
          {{ response.temperature }}
          <span class="CurrentWeather__TempUnit">
            °C
          </span>
        </span>
        
        <span class="CurrentWeather__Summary">
          {{ response.summary }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedCity: {
      type: String,
      default: ''
    },
    response: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    hasResult: function() {
      return Object.keys(this.response).length
    },
    iconPath: function() {
      return '/images/weather-icons/' + this.response.icon + '.svg'
    }
  }
}
</script>

<style>
</style>
