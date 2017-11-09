<template>
  <div class="wrapper">
    <header-menu></header-menu>
    <div class="header-navigator"></div>
  </div>
</template>

<script>
 import headerMenu from '../components/headerMenu.vue'
  export default {
    components: {
      headerMenu
    }
  }

</script>

<style lang="stylus" scoped>
@import '../assets/style/index'
</style>

