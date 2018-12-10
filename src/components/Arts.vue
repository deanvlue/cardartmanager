<template>
  <div class="arts">
    <div class="container">
      <!-- upload -->
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1>Subir imágenes de Arte</h1>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving"
          @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
          accept="image/*" class="input-file">
          <p v-if="isInitial">Arrastra tu imagen a este área</p>
          <p v-if="isSaving">Subiendo archivo</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import {upload} from './file-upload.service'

const STATUS_INITIAL = 0, STATUS_SAVING=1, STATUS_SUCCESS=2, STATUS_FAILED=3;
export default {
  name: 'Arts',
  data () {
    return {
      msg: "Aquí se sube el arte",
      uploadedFiles:[],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'arts'
    }
  },
  computed: {
    isInitial() {
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
      //resets all settings 
     this.currentStatus = STATUS_INITIAL;
     this.uploadedFiles = [];
     this.uploadError = null; 
    },
    save(formData){
      // sube la info al sevidor
      this.currentStatus = STATUS_SAVING;

      upload(formData)
      .then(x=>{
        this.uploadedFiles = [].concat(x);
        this.currentStatus = STATUS_SUCCESS
      })
      .catch(err=>{
        this.uploadError = err.response;
        this.currentStatus = STATUS_FAILED
      })
    },
    filesChange(fieldName, fileList){
      //cacha los cambios de archivos

      const formData = new FormData();

      if(!fileList.lenght) return;

      // Anexa los archivos al formData
      Array
        .from(Array(fileList.length).keys())
        .map(x=>{
          formData.append(fieldName, fileList[x], fileList[x].name);
        });

        //manda a salvar
        this.save(formData);
    }
  },
  mounted(){
    this.reset();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  min-height: 200px; /* elongate on height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover{
  background: rgb(110,110,110);
  color: rgb(255,255,255);
  outline: 1px dotted white;
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

.container{
  padding-bottom: 20px;
}
</style>
