<template lang="jade">
  .hello
    h1 影音庫
    .ui.row
      vedio1

</template>

<script>

import vedio1 from './vedio1.vue'

export default {
  name: 'Welcome',
  components: { vedio1 },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
}

</style>
