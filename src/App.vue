<template lang="jade">
  #app
    .ui.menu
      router-link.item(to="/" exact='')
        i.home.icon
        span 首頁
      //router-link.item(to="/docs" exact='')
        i.book.icon
        span 公告欄
      router-link.item(to="/photos" exact='')
        i.copy.icon
        span 相簿
      router-link.item(to="/links" exact='')
        i.exchange.icon
        span 連結
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

html {
  font-size: 22px !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,
               'Microsoft JhengHei',
                'Microsoft YaHei',
                'STHeiti',
                'Apple LiGothic Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-link-active {
  background-color: #fcf !important;
}
</style>
