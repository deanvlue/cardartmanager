<template>
  <div class="hello">
    <h4>Subir Arte de Tarjeta</h4>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Arts',
  data () {
    return {
      msg: "Aquí se sube el arte"
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


.dropbox{
  outline: 2px dashed grey; /* dashbox */
  outline-offset: -10px;
  background: rgb(223,221,221);
  color: #030303;
  padding: 10px 10px;
  min-height: 200px; /* elongate on height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover{
  background: rgb(110,110,110);
}

.dropbox p{
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.input-file{
  opacity: 0; /* invsisible pero ahistá*/
  width: 99%;
  height: 200px;
  position: absolute;
}
</style>
