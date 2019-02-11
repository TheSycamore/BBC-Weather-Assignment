<template>
  <div v-if=" selectedCity ">
    <h2>{{ selectedCity }}</h2>
    <div v-if=" hasResult ">
      <span>summary: {{ response.summary }}</span>
      <span>temperature: {{ response.temperature }}</span>
      <span>icon: {{ response.icon }}</span>
      <span>iconPath: {{ iconPath }}</span>
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
      return '/images/' + this.response.icon + '.svg'
    }
  }
}
</script>

<style>
</style>
