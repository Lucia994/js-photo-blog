console.log("Hello");

// Seleziono tutti gli elementi dove inserire le immagini manipolando l'elemento in DOM
const imageEl = document.querySelectorAll(".photo-image");

//fetch dei dati
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"
const imagesList = [];
fetch(endpoint)//fetch all'API 
    .then(response => response.json())
    .then(data => {
        const images = data; // Prendo gli oggetti dell'array data.response che contiene le 6 immagini.
        console.log(images); //stampo in console
        imagesList.push(images);


    })
console.log(imagesList)

//Devo inserire ciascuna immagina nel photo images utilizzo il metodo forEach
imagesList.forEach((image, i, array) => {
    
    }

)