console.log("Hello");


//fetch dei dati
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"
fetch(endpoint) //fetch all'API 
    .then(response => response.json())
    .then(images => {
        
        console.log(images); //stampo in console
        
        
        // //Devo inserire ciascuna immagina nel photo images utilizzo il metodo forEach
        images.forEach((image) => {
            document.getElementById('cardsList').innerHTML += `
            <div class="col">
                <div class="photo-card">
                    <div class="photo-image" style="background-color: var(--bg-color-first-card);">
                      <img src="${image.url}" />
                    </div>
                    <div class="description">
                        <div class="description-text">Accusamus Beatae Ad Facilis Cum Similique Qui Sunt</div>
                    </div>
                </div>
            </div>
            `;
        });
    })