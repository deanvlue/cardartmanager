<template>
<div id="login">
    <h1>Accede:</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Usuario"/>
    <input type="password" name="password" v-model="input.password" placeholder="Password"/>
    <button type="button" @click="login()">Iniciar Sesión</button>
</div>
</template>

<script>

// exporta el área asegurada
export default{
    name: 'Login',
    data(){
        return{
            input:{
                username: "",
                password: ""
            }
        }
    },

    methods:{
        login(){
            if(this.input.username !== "" && this.input.password != ""){
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password){
                    this.$emit("authenticated", true);
                    this.$router.replace({name: "secure"});
                }else{
                    console.log("El usuario y/o el password son incorrectos");
                }
            }else{
                console.log("Debes de colocar un nombre de usuario");
            }
        }
    }
}

</script>

<style scoped>
#login{
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #ffffff;
    margin: auto;
    margin-top: 200px;
    padding:20px;
}
</style>
