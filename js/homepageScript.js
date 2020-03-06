// let notification = document.querySelector('#notification');
let slideIndex = 1;
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');

// how the side nav opens and close
function openNav() {
  document.getElementById("mySidenav").style.width = "265px";
  document.querySelector(".main").style.marginLeft = "265px";
  document.querySelector("#footer").style.marginLeft = "265px";
  document.querySelector('#logo').style.display = "none";


}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0";
  document.querySelector("#footer").style.marginLeft = "0";
  document.querySelector('#logo').style.display = "block";
}

// Subscription PopUp code inspired by W3Schools and edited

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("mySidenav").style.display = "none";
  document.querySelector('#logo').style.display = "block";
  document.querySelector(".main").style.marginLeft = "0px";
  document.querySelector("#footer").style.marginLeft = "0";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("mySidenav").style.display = "block";
  document.querySelector(".main").style.marginLeft = "260px";

}

  // Notifications PopUp Onclick Code

// const form = document.querySelector('.sign');
const notification = document.querySelector(".notification");
const wrapper = document.querySelector(".wrapper")
// const submit = document.querySelector(".signB")

  notification.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display = "block";
    wrapper.style.display = "block";
})
//   form.addEventListener('sumbit', e =>{
//   e.preventDefault();
//   form.style.display="none";
//   wrapper.style.display = "none"; 
//   alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.')
// })

// Timeout for the Bell

const bell = document.querySelector(".notification");

  setTimeout( () => {
    bell.style.display = "none";
  }, 10000 )

  // selection of gender

  let girl = document.querySelector("#female");
  let boy = document.querySelector("#male");

  girl.addEventListener('click', e =>{
    girl.style.fill = "palevioletred";
    boy.style.fill = "white";

  })

  boy.addEventListener('click', e =>{
    boy.style.fill = "blue";
    girl.style.fill = "white";
  })

  //1st Sign in form
  
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var model = document.getElementById('In');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == model) {
        model.style.display = "none";
    }
}

const logged = document.querySelector('.logged');
const loggedIn  = document.querySelector('.loggedIn');

// logged.addEventListener('click', e =>{
//   loggedIn.style.display="block";
// })

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modals = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
  }
}

