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
        const fReader = new FileReader()
    })
}