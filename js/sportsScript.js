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
const submit = document.querySelector(".signB")

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
submit.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display="none";
})

// PopUp code inspired by W3Schools and edited

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("mySidenav").style.display = "none";
    document.getElementsByClassName("one").style.display = "none";

  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementsByClassName("one").style.display = "block";

  }


