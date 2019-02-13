<template>
  <header class="SiteHeader">
    <h1 class="SiteHeader__title">
      BBC Weather
    </h1>
    <nav class="SiteHeaderNav">
      <ul>
        <li
          v-for=" city in cities "
          :key=" city.index "
          class="SiteHeaderNav__item"
          :class="{ 'SiteHeaderNav__item--active': selectedCity === city.name }"
          @click.prevent=" emitCityClicked(city) "
        >
          <a>
            {{ city.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    cities: {
      type: Array,
      default: () => {
        return {}
      }
    },
    selectedCity: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    emitCityClicked(city) {
      this.$emit('cityClicked', city)
    }
  }
}
</script>

<style>
</style>
