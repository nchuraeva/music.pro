<template>
<div id="app" class="block-menu">
  <div class="block1">
    <img src="../assets/img/music.jpg" border="0" width="70" height="70"></div>
    <div class="block2">music.fm</div>
    <ul class="menu">
      <li class="li_element"><router-link to="/live">Live</router-link></li>
      <li class="li_element"><router-link to="/music">Музыка</router-link></li>
      <li class="li_element"><router-link to="/events">Cобытия</router-link></li>
      <li class="li_element"><router-link to="/favorites">Избранное</router-link></li>
      <li class="li_element"><router-link to="/join">Присоединиться</router-link></li>
      <li class="li_element"><router-link to="/enter">Вход</router-link></li>
    </ul>
  </div>
</template>

<script>
</script>
<style lang="stylus" scoped>
@import '../assets/style/headerMenu'
</style>
