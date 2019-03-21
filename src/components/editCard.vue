<template>
  <div class="container">
    <div class="row">
      <!-- Seleccionador de tarjetas -->
      <div class="col-md-6">
        <div class="cardSelector">
            <div v-if="arts.length < 1">
              Cargando...
            </div>
            <div class="list-group">
              <div class="list-group-item item-dark">
                Selecciona un arte
              </div>
              <button @click="selectArt(art, index)" :id="art.name" v-for="(art, index) in arts" v-bind:key="art.name" type="button" class="list-group-item list-group-item-action" :class="{'active': activeIndex === index}">
                <img :src="art.uri" class="img-responsive img-thumbnail" :alt="art.name"> <br/> {{art.name}}
              </button>
            </div>
          </div>
        </div> <!-- FIN de SELECCIONADOR DE TARJETAS col-md-4 -->
      <div class="col-md-6">
        <form class="form-cards" v-on:submit.prevent="submitData">
          <h2>Configuración de Bines</h2>
          <label for="inicialBin" class="">Bin Inicial</label>
          <div v-if="inicialBinLen > 0" class="alert alert-warning" role="alert">
            Faltan {{ inicialBinLen }} números
          </div>
          <div v-if="inicialBinLen === 0" class="alert alert-success" role="alert">
            Completo!
          </div>
          <input @blur="isValidBin"
           v-model="cardConfig.inicialbin" type="text" id="inicialBin" class="form-control" placeholder="6666666666666666" required autofocus>
          <label for="finalBin" class="">Bin Final</label>
          <div v-if="finalBinLen > 0" class="alert alert-warning" role="alert">
            Faltan {{ finalBinLen }} números
          </div>
          <div v-if="finalBinLen === 0" class="alert alert-success" role="alert">
            Completo!
          </div>
          <input @blur="isValidBin" v-model="cardConfig.finalbin" type="text" id="finalBin" class="form-control" placeholder="9999999999999999" required>
          <label for="promo" class="">Promo</label>
          <input v-model="cardConfig.promo" type="text" id="promo" class="form-control" placeholder="12345" required>
          <br>
          <button class="btn btn-lg btn-primary btn-block">Guardar</button>
        </form>
      </div>
    </div>
    <!--<div class="row">
      <div class="col">
        <pre>
          <code>
          {{ cardConfig}}
          </code>
        </pre>
      </div>
    </div>-->
  </div>
</template>

<script>
/* eslint-disable */
import * as axios from 'axios';

const BASE_URL = 'https://fnsbxcardart.azurewebsites.net/api/GetArts'
const POST_URL = 'https://as-sbxcardartapidev.azurewebsites.net/card';
//const POST_URL = 'http://localhost:9090/card';

export default {
  name: 'Cards',
  data () {
    return {
      msg: "Aquí se suben las cards",
      arts:[],
      activeIndex: 0,
      selectedImage: null,
      cardConfig: {
        inicialbin: null,
        finalbin: null,
        promo: null,
        active: true,
        imageurl: []
      }

    }
  },
  computed:{
    validateFields(){
      let binRegex = /[0-9]{16}/
      let promoRegex = /[0-9]*/
        return binRegex.test(this.cardConfig.inicialbin)
          && binRegex.test(this.cardConfig.finalbin)
          && promoRegex.test(this.cardConfig.promo)
          && this.cardConfig.imageurl.length > 0
    },
    finalBinLen(){
      if(this.cardConfig.finalbin !== null){
        return 16 - this.cardConfig.finalbin.length
      }
    },
    inicialBinLen(){
      if(this.cardConfig.inicialbin !== null){
        return 16 - this.cardConfig.inicialbin.length
      }
    }
  },
  methods:{
    selectArt(art, index){
      this.activeIndex = index;
      //console.log(this.activeIndex)
      //console.log(event.target.id)
      this.selected_image = art.name
      this.cardConfig.imageurl = [];
      this.imageurls(this.selected_image);

    },
    imageurls(artname){
        const uri = 'https://stfnsbxcardart.blob.core.windows.net/cardsartssized/'
        let imageurl =[];

        const artSizes = [
          "androidThumbXxhdpi",
          "androidThumbXhdpi", 
          "androidThumbHdpi", 
          "androidThumbMdpi", 
          "androidFullXxhdpi",
          "androidFullXhdpi", 
          "androidFullHdpi", 
          "androidFullMdpi",
          "iosLargeHighRes",
          "iosLarge",
          "iosThumbHighRes", 
          "iosThumb",
          "ImageStrip",
          "ImageLarge",
          "ImageMedium",
          "ImageSmall",
          "ImageIcon",
        ].map((x)=>{
          let imageconfig = {
            imageType: x,
            uri: `${uri}${artname.split(".")[0]}_${x}.${artname.split(".")[1]}`
          }
          
          this.cardConfig.imageurl.push(imageconfig)
      });
    },
    isValidBin(e){
      e.preventDefault();
      let regex = /[0-9]{16}/
      if (!regex.test(e.target.value)){
        alert("Revisa tus Bines")
      }
    },
    submitData(e){
      //e.preventDefault();
      if( this.validateFields){
          // Save to API
          console.log(this.cardConfig)
          axios.put(POST_URL, this.cardConfig)
          .then((res)=>{
            //console.log("información guardada");
            alert("Información Actualizada")
            this.$router.push('/listCards');            
          })
          .catch((err)=>{
            console.log(err);
          })
        }else{
          // Error
          e.preventDefault();
          alert("Hay errores en la información, favor de validar")
        }
    }
  },
  mounted(){
    axios.get(BASE_URL)
    .then((res)=>{
      //console.log(res.data.arts)
      this.arts = res.data.arts;
    })
    .catch(err=>{
      console.log(err)
    });

    var cardURL =POST_URL+"/"+ this.$route.params.cardid
    axios.get(cardURL)
      .then((res)=>{
        //console.log(res)
        this.cardConfig.inicialbin  = res.data.inicialbin;
        this.cardConfig.finalbin    = res.data.finalbin;
        this.cardConfig.promo  = res.data.promo;
        this.cardConfig.imageurl = res.data.imageurl;
      })
      .catch(err=>{
        console.log(err)
      })
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
  max-width: 80%;
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
  /*width: 190px;*/
  max-width: 60%;

}

.cardSelector{

  max-width: 90%;
  /*align-content: flex-start;*/
  height: 550px;
  max-height: 500px;
  overflow-y: scroll;
}

.item-dark{
  background-color: #333333;
  color: #f3f3f3
}

.active{
  background: #666;
}

input::placeholder{
  color: #dddddd;
}
</style>
