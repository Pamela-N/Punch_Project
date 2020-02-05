let notification = document.querySelector('#notification');
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');
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

// notification bell comands
notification.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "block";
})

  sbmit.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display = "none";
})