<template>
  <div class="hello">
    <h4>Página del administrador</h4>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios'

export default {
  name: 'UserBoard',
  data () {
    return {
      msg: "Hello Paseant"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
