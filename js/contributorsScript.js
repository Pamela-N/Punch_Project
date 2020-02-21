let notification = document.querySelector('#notification');
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');
const icon = document.querySelector('.search');
let girl = document.querySelector("#female");
let boy = document.querySelector("#male");
const wrapper = document.querySelector(".wrapper");

// how the side nav opens
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.querySelector(".main").style.marginLeft = "260px";
  icon.style.display='none';
}

// this is how the nav closes
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0px";
  icon.style.display='block';
}

// PopUp code inspired by W3Schools and edited
// PopUp of the form in the manue this is the way it opens
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("mySidenav").style.display = "none";
  document.querySelector(".main").style.marginLeft = "0px";

}

// popup of the form this is how it closes
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("mySidenav").style.display = "block";
  document.querySelector(".main").style.marginLeft = "260px";

}

// notification bell comands for the popup this is the way it opens.
notification.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "block";
  wrapper.style.display = "block";
})

// notification bell comands for the popup this is the way it closes.
form.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "none";
  wrapper.style.display = "none";
  alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.');
});

// selection of gender this makes you pick wheather you a girl or boy by changing colour
girl.addEventListener('click', () =>{
  girl.style.fill = "palevioletred";
  boy.style.fill ="white";
})

// selection of gender this makes you pick wheather you a girl or boy by changing colour
boy.addEventListener('click', () =>{
  boy.style.fill = "blue";
  girl.style.fill ="white";
})


setTimeout( () => {
  notification.style.display = "none";
}, 10000 )
 
