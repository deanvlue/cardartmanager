/* eslint-disable */
//file-upload.service.js

import * as axios from 'axios';

const BASE_URL = 'https://fnsbxcardart.azurewebsites.net/api/CardArtPost'

function upload(formData){
    const artes = formData.getAll('artes');
    const promises = artes.map((x)=>getImage(x)
    .then(img => (
        axios.post(BASE_URL,{
        filename: x.name,
        data: img
    }))))

    return Promise.all(promises)
 /*   return axios.post(BASE_URL, formData)
        //obtiene los datos
        .then(x=> x.data)*/
}

function getImage(file){
    return new Promise((resolve, reject) =>{
        const fReader = new FileReader();
        const img = document.createElement('img');

        fReader.onload = () =>{
            img.src = fReader.result;
            resolve(getBase64Image(img));
        }
        console.log(file.type);
        fReader.readAsDataURL(file);
    })
}


function getBase64Image(img){
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    console.log(img)

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img,0,0);

    //const dataURL = canvas.toDataURL('image/png');
    const dataURL = img.src;
    console.log(dataURL);
    return dataURL;
}

export {upload}