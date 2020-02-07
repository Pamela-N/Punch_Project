function openNav() {
    document.getElementById("mySidenav").style.left = "0vw";
}
function closeNav() {
    document.getElementById("mySidenav").style.left = "-100vw";
}

 const bell = document.querySelector(".notification");
  
 setTimeout( () => {
    bell.style.display = "none";
 }, 10000 )