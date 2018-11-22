<template>

  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace> Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated"></router-view>
  </div>

</template>


<script>
export default{
  name: 'App',
  data(){
    return{
      authenticated: false,
      mockAccount:{
        username: "carlos.munoz@alsea.com.mx",
        password: "Alsea.2018"
      }
    }
  },
  mounted(){
    if(!this.authenticated){
      this.$router.replace({name:"login"});
    }
  },

  methods:{
    setAuthenticated(status){
      this.authenticated = status;
    },
    logout(){
      this.status = false;
    }
  }
}
</script>

<style lang="scss">

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

.dropbox{
  outline: 2px dashed grey; /* dashbox */
  outline-offset: -10px;
  background: rgb(223,221,221);
  color: #030303;
  padding: 10px 10px;
  min-height: 200px; /* elongate on height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover{
  background: rgb(110,110,110);
}

.dropbox p{
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.input-file{
  opacity: 0; /* invsisible pero ahistá*/
  width: 99%;
  height: 200px;
  position: absolute;
}

</style>
