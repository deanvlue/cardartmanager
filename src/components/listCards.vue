<template>
  <div class="container">
    <div v-if="arts.length < 1">
      Cargando...
    </div>
    <div class="list-group">
      <button @click="selectArt" :id="art.name" v-for="art in arts" v-bind:key="art.name" type="button" class="list-group-item list-group-item-action">
        <img :src="art.uri" class="img-responsive img-thumbnail" :alt="art.name"> | {{art.name}}
      </button>
    </div>
    <pre>{{imageurl}}</pre>
  </div>
</template>

<script>
/* eslint-disable */

import * as axios from 'axios';

const BASE_URL = 'https://fnsbxcardart.azurewebsites.net/api/GetArts'

export default {
  name: 'listCards',
  data () {
    return {
      msg: "Aquí se suben las cards",
      arts: [],
      selected_image: null,
      imageurl :[] 
    }
  },
  methods:{
    selectArt(event){
      //console.log(event.target.id)
      this.selected_image = event.target.id
      this.imageurl = [];
      this.imageurls(event.target.id);

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
          
          //name = artname.split('.')
          //console.log(name.length);

          let imageconfig = {
            imageType: x,
            uri: `${uri}${artname.split(".")[0]}_${x}.${artname.split(".")[1]}`
          }
          
          this.imageurl.push(imageconfig)
      });
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
  width: 90px;
}
</style>
