let slideIndex = 1;
let notification = document.querySelector('#notification');
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');
const icon = document.querySelector('.search');


// how the side nav opens and close
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.querySelector(".main").style.marginLeft = "260px";
  icon.style.display='none';
  document.querySelector('.writer-name').style.display='none';
  document.querySelector('.writer-name2').style.display='none';
  document.querySelector('.writer-name3').style.display='none';
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0px";
  icon.style.display='block';
  document.querySelector('.writer-name').style.display='block';
  document.querySelector('.writer-name2').style.display='block';
  document.querySelector('.writer-name3').style.display='block';
}

// PopUp code inspired by W3Schools and edited

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("mySidenav").style.display = "none";
  document.querySelector(".main").style.marginLeft = "0px";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("mySidenav").style.display = "block";
  document.querySelector(".main").style.marginLeft = "260px";

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

// notification bell comands for the bell to disappear
setTimeout( () => {
  notification.style.display = "none";
}, 10000 )
