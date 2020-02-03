let slideIndex = 1;
showSlides(slideIndex);
let line= document.querySelector("hr");

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}


// window.scroll({
//   top: 80, 
//   left: 0, 
// });

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

notification.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "block";
})

// sign popup
const form = document.querySelector('.sign');
const notification = document.querySelector("#notification");

  notification.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display = "block";
})