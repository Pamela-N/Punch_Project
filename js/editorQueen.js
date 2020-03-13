let notification = document.querySelector('#notification');
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');
let girl = document.querySelector("#female");
let boy = document.querySelector("#male");
const wrapper = document.querySelector(".wrapper");
const artrticle1=document.querySelector('.api1');
const artrticle = document.querySelector('.photos-work');
const artrticle3=document.querySelector('.api2');
let pic = document.querySelector('.work1');
let image = document.querySelector('#writer-work1');
let pic2 = document.querySelector('.work5')

// how the side nav opens
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.querySelector(".main").style.marginLeft = "260px";

}

// this is how the nav closes
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0";
}

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
});

// notification bell comands for the popup this is the way it closes.
form.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "none";
  wrapper.style.display = "none";
  alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.')
});

// selection of gender this makes you pick wheather you a girl or boy by changing colour
girl.addEventListener('click', () =>{
  girl.style.fill = "palevioletred";
  boy.style.fill ="white";
});

// selection of gender this makes you pick wheather you a girl or boy by changing colour
boy.addEventListener('click', () =>{
  boy.style.fill = "blue";
  girl.style.fill ="white";
});

// notification bell comands for the bell to dissappear
setTimeout( () => {
  notification.style.display = "none";
}, 10000 );


// this is my asyc code that has a promise of changing my html page which takes information from nasa. news update everyday.
const getArticle1 = async()=>{
  const base ='https://api.nasa.gov/planetary/apod?api_key=8KbhchpfXXmADH2A1XraNuDiQCZwX0VI7vxTf1Vo';
  const response = await fetch(base);
  const data = await response.json().then(data=>{
    //return(data);
    artrticle1.innerHTML=`
    <br>
    <a href="#">
      <h2 class="heading">${data.title}</h2>
    </a>
    <p>Date: <br> ${data.date}</p>
    <p>Copyright:<br> ${data.copyright}</p>
    `

    pic.setAttribute('src' , data.url);
  }).catch(err => console.log(err));
  //console.log(data);
  
 

}
getArticle1();

// this is my second asyc code that has a promise of changing my html page which takes information from nasa. this infor mation does not change.

const getArticle = async()=>{
    const base ='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=8KbhchpfXXmADH2A1XraNuDiQCZwX0VI7vxTf1Vo';
    const response = await fetch(base);
    const data = await response.json().then(data=>{
       //return(data);

       for (i = 0; i< 3; i++){
      artrticle.innerHTML +=`
      <a href="#">
        <h2 class="heading">${data.photos[i].rover.name}</h2>
      </a>
      <img id="writer-work1"src="${data.photos[i].img_src}" alt="Picture on the moon.">
      <p id="text1" class="content">Image release date:<br> ${data.photos[i].earth_date}</p>
      <p id="text1" class="content">Camera name:<br> ${data.photos[i].camera.full_name}</p>
      <p id="text1" class="content">Landing date:<br> ${data.photos[i].rover.landing_date}</p>
      <br>
      `
       }
    }).catch(err => console.log(err));
   //console.log(data);
    
   

}
getArticle();

// this is my third asyc code that has a promise of changing my html page which takes information from nasa. this information/data does not change

const getArticle3 = async()=>{
  const base ='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=8KbhchpfXXmADH2A1XraNuDiQCZwX0VI7vxTf1Vo';
  const response = await fetch(base);
  const data = await response.json().then(data=>{
    // return(data);
    artrticle3.innerHTML=`
    <a href="#">
    <h2 class="heading">${data.photos[1].rover.name}</h2>
    </a>
    <p id="text1">Earth date: <br> ${data.photos[1].earth_date}</p>
    <p id="text1">Camera: ${data.photos[1].camera.full_name}</p>
    <p id="text1">Landing date:<br> ${data.photos[1].rover.landing_date}</p>
    `

    pic2.setAttribute('src' , data.photos[1].img_src);
  }).catch(err => console.log(err));
// console.log(data);
  
 

}
getArticle3();

