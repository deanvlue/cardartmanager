<template>
  <div id="app">
   <header class="header_sbx">
     <div class="header_container_sbx">
       <div class="logo">
         <a href="http://www.starbucks.com.mx/" rel="home" title="Starbucks logo" class="logo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNjgwMTE3NDA3MjA2ODExOEMxNEVDQUI0Q0YzMUExNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QzJBRjBGNEM3MzcxMUUzOUZGNzgwQTg2RTA1MzgxMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QzJBRjBGM0M3MzcxMUUzOUZGNzgwQTg2RTA1MzgxMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU4MDExNzQwNzIwNjgxMTgwODM4NjBGNzhFMEFGMjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDY4MDExNzQwNzIwNjgxMThDMTRFQ0FCNENGMzFBMTciLz4gPC9yZGY6RGVzY3Jp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" alt="logo"></a>
      </div>
      <div class="title">
        <h1>Card Art Manager</h1>
      </div>
    </div>
  </header>
    <div id="nav">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="!isLoggedIn" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="isLoggedIn" to="/arts">Alta de Artes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="isLoggedIn" to="/listCards">Lista de Tarjetas</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="isLoggedIn" @click="logout">Logout</a>
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

<style lang="scss">
#app {
  font-family: Oswald-ExtraLight, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
  background-color: #eae6e6;
}

@font-face {
  font-family: Lato;
  src: url(assets/font/Lato-Light.woff) format('woff'),
        url(assets/font/Lato-Light.woff2) format('woff2');
  }

@font-face {
  font-family: Oswald-ExtraLight;
  src: url(assets/font/Oswald-ExtraLight.woff) format('woff'),
        url(assets/font/Oswald-ExtraLight.woff2) format('woff2'),
        url(assets/font/Oswald-ExtraLight.ttf) format('truetype');
  }

body{
  font-family: Oswald-ExtraLight, sans-serif;
}
.component-HkWuTWx{
  padding-top: 16px;
  background-color: #f7f7f7;
  position: relative;
  box-sizing: border-box;
}

.logo{
  float: left;
  position: relative;
  top: 2px;
  padding: 5px;
}

.header_container_sbx{
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-bottom: 90px;
}
.header_sbx{
  padding-top: 16px;
  background-color: #f7f7f7;
  position: relative;
  box-sizing: border-box;
}

.title{
  float:left;
  margin: 5px;
  margin-left: 15px;
  font-family:Lato, sans-serif;
}
</style>
