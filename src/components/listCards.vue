<template>
  <div class="container">
    <ul class="list-unstyled">
      <li v-for="art in arts" v-bind:key="art.name">
        <img :src="art.uri" class="img-responsive img-thumbnail" :alt="art.name">
      </li>
    </ul>
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
