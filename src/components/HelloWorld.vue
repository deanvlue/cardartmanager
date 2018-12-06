<template>
  <div class="hello">
    <h1>Starbucks Card Art Manager</h1>
    <ul>
    <span v-if="!isLoggedIn"> <li><a href="/login">Login</a></li></span>
      <li><a href="/cards">Alta de tarjetas</a></li>
      <li><a href="/arts">Imágenes de tarjetas</a></li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Starbucks App Card Art Manager'
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
