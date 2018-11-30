<template>
  <div>
    <h4>Register</h4>
    <form>
      <label for="name">Nombre:</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="email">Email:</label>
      <div>
        <input id="email" type="email" v-model="email" required>
      </div>
        <label for="password"> Password:</label>
        <div>
          <input id="password" type="password" v-model="password" required>
        </div>
        <label for="password-confirm"> Confirm Password:</label>
        <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
        </div>

        <div>
          <select v-model="is_admin">
            <option value=1>Yes</option>
            <option value=0>No</option>
          </select>
        </div>

      <div>
        <button type="submit" @click="handleSubmit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Register',
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
              this.$router.push(this.$route.params.nextUrl)
            }else{
              if(is_admin==1){
                this.$router.push('admin')
              }else{
                this.$router.push('dashboard')
              }
            }
          }

        })
        .catch(function(error){
          console.error(error.response);
        })
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
