<template lang="jade">
  .hello
    h1 相簿
    .ui.list
      .item
        img(src="/static/img/photo001.jpg")

</template>

<script>

export default {
  name: 'Photos',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  width: 80%;
  margin: 0 auto;
}

</style>
