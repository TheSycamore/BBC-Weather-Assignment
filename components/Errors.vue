<template>
  <p v-if=" error.message ">
    Error: {{ error.message }}
  </p>
</template>

<script>
export default {
  props: {
    error: {
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
