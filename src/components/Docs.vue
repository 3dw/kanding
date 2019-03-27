<template lang="jade">
  .hello
    h1 文集
    doc1
</template>

<script>

import doc1 from './doc1.vue'

export default {
  name: 'Welcome',
  components: { doc1 },
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
