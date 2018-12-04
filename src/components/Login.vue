<template>
  <div>
    <h4>Login</h4>
    <form>
      <label for="email">Usuario/Correo:</label>
      <div>
        <input id="email" type="email" v-model="email" required autofocus>
      </div>
      <div>
        <label for="password"> Password:</label>
        <div>
          <input id="password" type="password" v-model="password" required>
        </div>
      </div>

      <div>
        <button type="submit" @click="handleSubmit"> Login</button>
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
    handleSubmit(e){
      e.preventDefault()
      if(this.password.length > 0){

        this.$http.post('http://localhost:3000/login',{
          email: this.email,
          password: this.password
        })
        
        .then(response=>{
          let is_admin = response.data.user.is_admin
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('jwt', response.data.token)

          if(localStorage.getItem('jwt') !== null){
            this.$emit('loggedIn')
            if(this.$route.params.nextUrl !== null){
              console.log(this.$route)
              console.log(this.$router)
              this.$router.push(this.$route.params.nextUrl)

            }else{
              if(is_admin==1){
                this.$router.push('/admin')
              }else{
                this.$router.push('/dashboard')
              }
            }
          }
        })
        .catch((e)=>console.error(e))
      }
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
