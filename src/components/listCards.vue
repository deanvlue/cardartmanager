<template>
  <div class="container">
    <pre>{{cards}}</pre>
  </div>
</template>

<script>
/* eslint-disable */

import * as axios from 'axios';
import {getAuthorizationTokenUsingMasterKey} from '../util/generateKey'

const BASE_URL = 'https://bd-sbxcardart01.documents.azure.com/dbs/bdsbxcardartdev/colls/colcardartdev/docs'

export default {
  name: 'listCards',
  data () {
    return {
      cards: null
    }
  },
  methods:{
    getCards(){
      const verb = "GET",
            resourceType = "docs",
            resourceId="dbs/bdsbxcardartdev/colls/colcardartdev",
            masterKey = "mRrSShNPTDvMhKEaUr3quO8BCBHAA025xEam7MafIUBmEOM77abHoFYIaYPBTgrjYvg445Pnnf6nB4DAPaXa7w==",
            fecha = new Date().toUTCString(),
            auth_token= getAuthorizationTokenUsingMasterKey(verb, resourceType, resourceId, fecha, masterKey);
      
      let config ={
        headers:{
          'authorization': auth_token,
          'x-ms-version': '2015-12-16',
          'Accept': 'application/json',
          'x-ms-date': fecha,
          'Access-Control-Allow-Origin':'*'
        }
      }
        axios.get(BASE_URL, config)
        .then((res)=>{
          //console.log(res.data.arts)
          this.cards = res
        })
        .catch(err=>{
          console.log(err)
        })
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
  width: 90px;
}
</style>
