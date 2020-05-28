<template lang="jade">
  .hello
    h1 相關連結
    .ui.bulleted.left.aligned.divided.list.container
      a.item(v-for="l in links", :href = "l.url", :key="l.url", target="_blank") {{ l.name }}
    hr
</template>

<script>
export default {
  name: 'Links',
  data () {
    return {
      links: [
        {
          name: '社區整體照顧服務體系c級單位-淡水區崁頂里巷弄長照站',
          url: 'https://www.facebook.com/%E7%A4%BE%E5%8D%80%E6%95%B4%E9%AB%94%E7%85%A7%E9%A1%A7%E6%9C%8D%E5%8B%99%E9%AB%94%E7%B3%BBc%E7%B4%9A%E5%96%AE%E4%BD%8D-%E6%B7%A1%E6%B0%B4%E5%8D%80%E5%B4%81%E9%A0%82%E9%87%8C%E5%B7%B7%E5%BC%84%E9%95%B7%E7%85%A7%E7%AB%99-1431500370326244/'
        },
        {
          name: '淡水國家新都社團',
          url: 'https://www.facebook.com/groups/1722266604770327/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
