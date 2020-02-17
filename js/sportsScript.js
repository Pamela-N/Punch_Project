function openNav() {
  document.getElementById("mySidenav").style.left = "0vw";
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-100vw";
}

// Notifications PopUp Onclick Code

const form = document.querySelector('.sign');
const notification = document.querySelector("#notification");
const submit = document.querySelector(".signB")

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

//popup for plus icon clicked to show commenting option 

const btn = document.querySelector('.addMore');

const newP = document.querySelector('.newP');
const wrapper = document.querySelector('.popupWrapper');
const close = document.querySelector('.vala');
const btn2 = document.querySelector('.senda');



btn.addEventListener('click', () => {
  wrapper.style.display ='block'; 
});
close.addEventListener('click', ()=> {
  wrapper.style.display  ="none";
});


wrapper.addEventListener('click', e => {
  if(e.target.className === 'popupWrapper'){
      wrapper.style.display = 'none';
  }

});

//this is for the  button on the popup that will allow you to submit the info on the popup page to go to the reset pasword page

btn2.addEventListener('click', () => {
wrapper.style.display = 'none';
});
