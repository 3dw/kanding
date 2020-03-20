<template lang="jade">
  .hello
    h1 {{ msg }}
    .ui.row

</template>

<script>

export default {
  name: 'Welcome',
  data () {
    return {
      msg: '長照站'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
}

p {
  text-align: left;
  font-size: 18px;
}

table {
}

th img {
  height: 7em;
  border-radius: 50%;
}

th.big {
  width: 45%;
}

th {
  background-color: #f9f;
}

th.li {
  background-color: #fc9;
}

th.fo {
  background-color: #f99;
}

td.lo {
  background-color: #fcf;
}

td.li {
  background-color: #fda;
}

td.fo {
  background-color: #fcc;
}
th, td {
  padding: .5em;
  text-align: center;
  font-size: 16px;
}

li {
  display: inline-block;
  margin: 0.5em 1em;
}

li::before {
  content: '*'
}

</style>
