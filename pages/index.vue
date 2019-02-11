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
  }
}
</script>

<style>
</style>
