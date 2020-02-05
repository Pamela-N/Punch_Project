let slideIndex = 1;
showSlides(slideIndex);
let notification = document.querySelector('#notification');
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');

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