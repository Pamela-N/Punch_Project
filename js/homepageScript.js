function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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

  // notification popup

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