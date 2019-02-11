<template>
  <div v-if=" selectedCity ">
    <h2>{{ selectedCity }}</h2>
    <div v-if=" hasResult ">
      RESPONSE: {{ response }}
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
    }
  }
}
</script>

<style>
</style>
