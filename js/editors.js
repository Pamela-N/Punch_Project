let notification = document.querySelector('#notification');
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');

// how the side nav opens and close
function openNav() {
  document.getElementById("mySidenav").style.left = "0vw";
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-100vw";
}

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

// notification bell comands for the popup
notification.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "block";
})

sbmit.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "none";
  alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.')
})

// notification bell comands for the bell to dissappear
setTimeout( () => {
  notification.style.display = "none";
}, 10000 )