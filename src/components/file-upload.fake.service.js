/* eslint-disable */
function upload(formData){
    const artes = formData.getAll('artes');
    const promises = artes.map((x)=> getImage(x)
    .then(img=>({
        id: img,
        originalName: x.name,
        fileName: x.name,
        url: img
    })));

    return Promise.all(promises);
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