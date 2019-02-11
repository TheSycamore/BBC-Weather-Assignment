<template>
  <div>
    <h2>
      {{ selectedCity }}
    </h2>
    <div>
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
  }
}
</script>

<style>
</style>
