console.log("Hello");

// Get the modal
const modal = document.getElementById("myModal");


//fetch dei dati
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"
fetch(endpoint) //fetch all'API 
    .then(response => response.json())
    .then(images => {

        console.log(images); //stampo in console

        const cardsList = document.getElementById('cardsList');
        // //Devo inserire ciascuna immagina nel photo images utilizzo il metodo forEach
        images.forEach((image) => {
            document.getElementById('cardsList').innerHTML += `
            <div class="col">
                <div class="photo-card">
                    <div class="photo-image" style="background-color: var(--bg-color-first-card);">
                        <img class="myImage" src="${image.url}" />
                    </div>
                    <div class="description">
                     <p>${image.date}</p>
                     <h3>${image.title}</h3>
                   
                    </div>
                </div>
            </div>
            `;
        });
        // Get the button that opens the modal
        const myImages = document.querySelectorAll(".myImage");
        console.log(myImages);


        // When the user clicks on the button, open the modal
        for (let i = 0; i < myImages.length; i++) {
            myImages[i].addEventListener("click", function () {
                modal.querySelector('.modal-img').innerHTML = `<img src="${myImages[i].getAttribute("src")}" width="100%" />`
                modal.style.display = "block";
            });
        }

    })

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
