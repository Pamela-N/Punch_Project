function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const soccer = document.querySelector(".soccer")
const swim = document.querySelector(".swim")
const basketball = document.querySelector(".basketball")
const cricket = document.querySelector(".cricket")
const form = document.querySelector('.sign');
const notification = document.querySelector("#notification");

// soccer.addEventListener('click',() =>{
//     location.href="SportsArticle.html"
// })

// swim.addEventListener('click',() =>{
//     location.href="SportsArticle.html"
// })
// basketball.addEventListener('click',() =>{
//     location.href="SportsArticle.html"
// })
// cricket.addEventListener('click',() =>{
//     location.href="SportsArticle.html"
// })


notification.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display = "block";
})


