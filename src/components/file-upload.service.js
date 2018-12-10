/* eslint-disable */
//file-upload.service.js

import * as axios from 'axios';

const BASE_URL = 'https://fnsbxcardart.azurewebsites.net/api/CardArtPost'

function upload(formData){
    return axios.post(BASE_URL, formData)
        //obtiene los datos
        .then(x=> x.data)
}

export {upload}