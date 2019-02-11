<template>
  <header>
    <h1>
      BBC Weather
    </h1>
    <nav>
      <ul>
        <li
          v-for=" city in cities "
          :key=" city.index "
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
    }
  }
}
</script>

<style>
</style>
