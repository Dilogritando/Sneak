function displayMenu(){
    var showMenu = document.getElementById("header__navbar");
  if (showMenu.style.display === "none") {
    showMenu.style.display = "flex";
  } else {
    showMenu.style.display = "none";
  }
}

function displayMenu2(){
    var showMenu2 = document.getElementById("main_navbar");
  if (showMenu2.style.display === "none") {
    showMenu2.style.display = "flex";
  } else {
    showMenu2.style.display = "none";
  }
}
