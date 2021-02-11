var showMenu = document.getElementById("header__navbar");
var showMenu2 = document.getElementById("main_navbar");
let jsonFormat;
let imgArray;


/* const numCols = 3
const colHeights = Array(numCols).fill(0)
const container = document.getElementById('main__portfolio--mosaic')

Array.from(container.children).forEach((child, i) => {
  const order = i % numCols
  child.style.order = order
  colHeights[order] += parseFloat(child.clientHeight)
})
container.style.height = Math.max(...colHeights) + 'px' */

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

/* Porfolio Mosaic */
fetch('./src/data_portfolio.json')
  .then(function (response) {
    var jsonFormat = response.json();
    return jsonFormat
  }).then(function (jsonFormat) {
    console.log('Aqui estamos primero: ', jsonFormat);
    let imgArray = Array.from(jsonFormat.images);
    console.log('Aqui estamos después: ', imgArray);
    return imgArray;
  }).catch(error => {
    if (error.status === 404) {
      console.log("Error 404")
    }
})

function importIMG (imgArray) {
  return console.log ('Buenas: ',imgArray);
  /* const container = document.getElementById('main__portfolio--mosaic')
  Array.from(jsonFormat.children).forEach(function(obj) {
    var img = new Image();
    img.src = obj.url;
    img.setAttribute("id", "id");
    img.setAttribute("alt", "Portfolio images");
    document.getElementById('main__portfolio--item').appendChild(img)
  }) */
}
