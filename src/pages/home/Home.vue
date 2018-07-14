<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearch
  }
}
</script>

<style>

</style>
