  <template>
  <div class="container">
    <div class="row">
      <div class="col-12">
      </div>
    </div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <th colspan="4"><h3>Listado de tarjetas</h3></th>
        <th colspan="1"> <a  href="/cards" class="btn btn-primary btn-green"> (+) Agregar tarjeta</a></th>
      </thead>
      <thead class="thead-dark">
        <th scope="col">Promo</th>
        <th scope="col">Bin Inicial</th>
        <th scope="col">Bin Final</th>
        <th scope="col">Arte</th>
        <th scope="col">Editar</th>
      </thead>
      <tbody>
        <tr v-for="card in cards" v-bind:key="card._id">
          <td>{{card.promo}}</td>
          <td>{{card.inicialbin}}</td>
          <td>{{card.finalbin}}</td>
          <td><img class="img-thumbnail" :src="card.imageurl[16].uri" alt=""></td>
          <td>
            <b-button :href="'/editCard/'+ card.inicialbin" class="btn btn-primary btn-green"><i class="fas fa-edit"></i></b-button>
            <button class="btn btn-primary btn-danger" @click="removeCard(card._id)"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>
<!--
  <div class="modal">
    <div class="modal-window">
      <p>Está seguro de querer eliminar el arte para la promoción {{ card.promo }} de tarjeta?</p>
      <div class="actions">
        <button class="cancel" @click="onCancel">Cancelar</button>
        <button class="accept" @click="onAccept">Aceptar</button>
      </div>
    </div>
  </div>
  -->

<script>
/* eslint-disable */

import * as axios from 'axios';
//import {getAuthorizationTokenUsingMasterKey} from '../util/generateKey'

const BASE_URL ='https://as-sbxcardartapidev.azurewebsites.net/card'
//const BASE_URL = 'https://bd-sbxcardart01.documents.azure.com/dbs/bdsbxcardartdev/colls/colcardartdev/docs'

export default {
  name: 'listCards',
  data () {
    return {
      cards: null
    }
  },
  methods:{
    getCards(){
        axios.get(BASE_URL)
        .then((res)=>{
          console.log(res.data)
          this.cards = res.data
        })
        .catch(err=>{
          console.log(err)
        })
      },
    removeCard(card){
      alert(card);
    }
    
  },
  mounted(){
    this.getCards()
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
.form-cards{
  max-width: 400px;
  padding: 15px;
  margin: 0 auto;
}

.sr-only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  clip: rect(0,0,0,0);
  border: 0;
}
.img-thumbnail{
  max-height: 90px;
  max-width: auto;
  padding: 0px;
  margin: 0px;
  
}
.btn-green{
  outline: none;
background-color: transparent;
border: none;
cursor: pointer;
font-family: Lato-Light,sans-serif;
height: 45px;
padding: 20px;
padding-top: 10px;
text-transform: uppercase;
font-size: 14px;
background:rgb(65,165,134);
color: #fff;
letter-spacing: 1px;
transition: background-color .2s ease;
}
</style>
