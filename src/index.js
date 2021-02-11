var showMenu = document.getElementById("header__navbar");
var showMenu2 = document.getElementById("main_navbar");
const mosaic = document.getElementById("main__portfolio__mosaic");
const originalURL = './src/data_portfolio.json';
let urlArray;

function displayMenu(){
  if (showMenu.style.display === "none") {
    showMenu.style.display = "flex";
  } else {
    showMenu.style.display = "none";
  }
}

function displayMenu2(){
  if (showMenu2.style.display === "none") {
    showMenu2.style.display = "flex";
  } else {
    showMenu2.style.display = "none";
  }
}

fetch(originalURL)
  .then(function (response) {
    /* console.log("El response inicial es: ", response) */
    var jsonFormat = response.json();
    return jsonFormat
  }).then(function (jsonFormat) {
    /* console.log('Aqui estamos primero: ', jsonFormat); */
    let imgArray = Array.from(jsonFormat.images);
    /* console.log('Aqui estamos después: ', imgArray); */
    return imgArray;
  }).then(function (imgArray) {
    let urlArray= imgArray.map(a => {
      let figure = document.createElement("figure");
          figure.innerHTML = `<img src="${a.url}" alt="Orchids">`;
          mosaic.appendChild(figure);
        });
  }).catch(error => {
    if (error.status === 404) {
      console.log("Error 404")
    }
})
