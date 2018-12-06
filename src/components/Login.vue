<template>
  <div>
    <h4>Login</h4>
    <form class="container login" @submit.prevent="login">
      <div class="input-group">
        <span class="input-group-addon">
          <label for="email">Usuario/Correo:</label>
        </span>
        <input class="form-control" placeholder="Nombre de usuario" id="email" type="email" v-model="email" required autofocus>
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <label for="password"> Password:</label>
        </span>
          <input class="form-control" placeholder="Password" id="password" type="password" v-model="password" required>
      </div>

      <div>
        <button class="btn btn-primary" type="submit"> Login</button>
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
  width: 80%;

}
</style>
