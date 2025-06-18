console.log("Hello");
function fetchData() {

    fetch("https://lanciweb.github.io/demo/api/pictures/")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

}

