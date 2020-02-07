function openNav() {
    document.getElementById("mySidenav").style.left = "0vw";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.left = "-100vw";
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
    alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.')
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

  const bell = document.querySelector("#notification");

  setTimeout( () => {
    bell.style.display = "none";
  }, 10000 )


