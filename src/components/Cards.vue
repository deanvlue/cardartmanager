<template>
  <div class="container">
    <form class="form-cards">
      <h2>Configuración de Bines</h2>
      <label for="inicialBin" class="">Bin Inicial</label>
      <input type="text" id="inicialBin" class="form-control" placeholder="6666666666666666" required autofocus>
      
      <label for="finalBin" class="">Bin Final</label>
      <input type="text" id="finalBin" class="form-control" placeholder="9999999999999999" required>
      
      <label for="promo" class="">Promo</label>
      <input type="text" id="promo" class="form-control" placeholder="12345" required>
      <br>      
      <button class="btn btn-lg btn-primary btn-block" type="submit">Guardar</button>
    </form>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Cards',
  data () {
    return {
      msg: "Aquí se suben las cards"
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
</style>
