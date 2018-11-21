<template>
  <div id="app">
    <div class="container">
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1>Subir arte de tarjetas</h1>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" 
            @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*" class="input-file"
            >

            <p v-if="isInitial"> Arrastra la imagen de la tarjeta o <br/>da click para buscar un archivo en tu computadora</p>

            <p v-if="isSaving">
              Uploading {{ fileCount}} files...
            </p>
        </div>
      </form>

      <!--succcess -->
      <div v-if="isSuccess">
        <h2>Los artes han sido subidos!</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Subir más</a>
        </p>

        <ul class="list-unstyled">
          <li v-for="item in uploadedFiles">
            <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
          </li>
        </ul>
      </div>

      <!-- FAILED -->

      <div v-if="isFailed">
        <h2>Uploaded Failed</h2>

        <p>
          <a href="javascript:void(0)" @click="reset()">Intenta de nuevo</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>


    </div>
  </div>
</template>

<script>

// use fake service
import { upload } from './file-upload.fake.service'; // servicio falso

const STATUS_INITIAL=0, STATUS_SAVING=1, STATUS_SUCCESS=2, STATUS_FAILED=3;

export default{
  name: 'app',
  data(){
    return{
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'cardart'
    }
  },
  computed:{
    isInitial(){
      return this.currentStatus === STATUS_INITIAL;
    },

    isSaving(){
      return this.currentStatus === STATUS_SAVING;
    },

    isSuccess(){
      return this.currentStatus === STATUS_SUCCESS;
    },

    isFailed(){
      return this.currentStatus === STATUS_FAILED;
    }
  },

  methods:{
    reset(){
      //resetea la forma a su estado inicial
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },

    save(formData){
      this.currentStatus = STATUS_SAVING;

      // manda a llamar la función de guardar en el API
      // en este caso subiría la imagen or medio del Azure StorageAPI

      //console.log(formData)
      upload(formData)
        .then(x=>{
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch(err=>{
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        })     
      
    },

    filesChange(filedName, fileList){
      const formData = new FormData();

      if(!fileList.length) return;

      //anexa los archivos ael objeto FormData

      Array
        .from(Array(fileList.length).keys())
        .map(x=>{
          formData.append(filedName, fileList[x],fileList[x].name)
        })

      //saveit
      this.save(formData);
    }
  },

    mounted(){ // this is computed
      this.reset();
    }
}


</script>

<style lang="scss">

@font-face {
  font-family: Lato;
  src: url(assets/font/Lato-Light.woff) format('woff'),
        url(assets/font/Lato-Light.woff2) format('woff2');
  }

@font-face {
  font-family: Oswald-ExtraLight;
  src: url(assets/font/Oswald-ExtraLight.woff) format('woff'),
        url(assets/font/Oswald-ExtraLight.woff2) format('woff2'),
        url(assets/font/Oswald-ExtraLight.ttf) format('truetype');
  }

body{
  font-family: Oswald-ExtraLight, sans-serif;
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
