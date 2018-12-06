<template>
  <div>
    <h4>Login</h4>
    <form class="container login" @submit.prevent="login">
      <div class="input-group">
        <input class="login_input" placeholder="Nombre de usuario" id="email" type="email" v-model="email" required autofocus>
      </div>
      <div class="input-group">
          <input class="login_input" placeholder="Password" id="password" type="password" v-model="password" required>
      </div>
      <br>
      <div>
        <button class="btn btn-primary button_green" type="submit"> Login</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */

//import axios from 'axios'

export default {
  data () {
    return {
      email: "",
      password: ""
    }
  },

  methods:{
    login: function(){
      let email = this.email
      let password = this.password
      this.$store.dispatch('login',{email, password})
      .then(()=> this.$router.push('/'))
      .catch(err => console.log(err))
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
.login{
  max-width: 350px;
  position: relative;
  width: 100%;

}

.login_input{
  font-family: Lato-Light,sans-serif;
  font-size: 13px;
  background: none;
  display: block;
  border: 0;
     border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: 0px;

  border-bottom: 1px dotted #3d3a35;
  min-width: 350px;
  padding: 3px 5px;
  margin: 28px 0 0;
  outline: none;
  font-weight: 700;
  letter-spacing: 1px;
}

.button_green{
  outline: none;
background-color: transparent;
border: none;
cursor: pointer;
font-family: Lato-Light,sans-serif;
height: 45px;
padding: 0 30px;
text-transform: uppercase;
font-size: 14px;
background: #006341;
color: #fff;
letter-spacing: 1px;
transition: background-color .2s ease;
}
</style>
