console.log("Hello");
//fetch dei dati
const endpoint = "https://lanciweb.github.io/demo/api/pictures/" 
const imagesList = [];
fetch(endpoint)//fetch all'API 
    .then(response => response.json())
    .then(data => {
        const images = data; // Prendo gli oggetti dell'array data.response che contiene le 6 immagini.
        console.log(images); //stampo in console

    })
