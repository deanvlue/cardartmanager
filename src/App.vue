<template>
  <div id="app">
    <div id="nav">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"> 
          <router-link to="/">Home</router-link> 
        </li>
          <li role="presentation">
            <span v-if="!isLoggedIn"><router-link to="/login">Login</router-link></span>
          </li>
          <li role="presentation">
            <router-link v-if="isLoggedIn" to="/cards">Configurar Bines</router-link> <span v-if="isLoggedIn"></span>
          </li>
          <li role="presentation">
            <router-link v-if="isLoggedIn" to="/arts">Alta de Artes</router-link> <span v-if="isLoggedIn"></span>
          </li>
          <li role="presentation">
            <span v-if="isLoggedIn"> <a @click="logout">logout</a></span>
          </li>
      </ul>
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
