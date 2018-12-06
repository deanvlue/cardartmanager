<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn" to="/cards">Tarjetas</router-link> <span v-if="isLoggedIn"> | </span>
      <router-link v-if="isLoggedIn" to="/arts">Alta de Artes</router-link> <span v-if="isLoggedIn"> | </span>
      <span v-if="isLoggedIn"> <a @click="logout">logout</a></span>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  computed: {
    isLoggedIn: function(){
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout: function(){
      this.$store.dispatch('logout')
      .then(()=>{
        this.$router.push('/login')
      })
    }
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
  margin-top: 60px;
}
</style>
