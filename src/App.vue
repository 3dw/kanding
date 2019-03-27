<template lang="jade">
  #app
    .ui.menu
      router-link.item(to="/" exact='')
        i.home.icon
        span 首頁
      router-link.item(to="/notes" exact='')
        i.book.icon
        span 公告欄
      router-link.item(to="/links" exact='')
        i.sitemap.icon
        span 連結
      router-link.item(to="/docs" exact='')
        i.copy.icon
        span 文件匣
      router-link.item(to="/vedios" exact='')
        i.play.icon
        span 影音庫
    router-view
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-link-active {
  background-color: #fcf !important;
}
</style>
