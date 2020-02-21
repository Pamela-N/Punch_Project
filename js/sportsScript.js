// how the side nav opens and close
let slideIndex = 1;
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.querySelector(".main").style.marginLeft = "260px";
  document.querySelector("#navbar").style.marginLeft = "260px";
  
  
  
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0px";
  document.querySelector("#navbar").style.marginLeft = "0px";
}

// Notifications PopUp Onclick Code

const form = document.querySelector('.sign');
const notification = document.querySelector("#notification");
const submit = document.querySelector(".signB")
const rapper = document.querySelector(".rapper")

notification.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "block";
  rapper.style.display = "block";
})
form.addEventListener('click', e =>{
e.preventDefault();
form.style.display="none";
rapper.style.display = "none"; 
alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.')
})

// selection of gender

let girl = document.querySelector("#female");
let boy = document.querySelector("#male");

girl.addEventListener('click', e =>{
  girl.style.fill = "palevioletred";
  boy.style.fill ="white";
})

boy.addEventListener('click', e =>{
  boy.style.fill = "blue";
  girl.style.fill= "white";
})


// Subscription PopUp code inspired by W3Schools and edited

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


//here i'll be working with the API for the sports article section
const newsImage  = document.querySelector('#ball');
const articleContent = document.querySelector('.write');
const pic = document.querySelector('#swim')
const text = document.querySelector('.Ost')
const pic1 = document.querySelector('#cri')
const text1 = document.querySelector('.Obt')
const pic2 = document.querySelector('.Oc')
const text2 = document.querySelector('.Oct')
const pic3 = document.querySelector('.Od')
const text3 = document.querySelector('.Odt')

const base = "http://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=a9653deccaa24ed2b76197d55b4d7cdf";

const getNews = async () => {
  const response = await fetch(base);
  const data = await response.json();

  return data;

};

getNews()
.then(data => {
  newsData = data;
  console.log (newsData);

articleContent.innerHTML = 

  `<h1 class= "heading">${newsData.articles[11].title}</h1>
  <br>
   <p> Author: ${newsData.articles[11].author}</p>
   <br>
      <div class="write">
          <p>${newsData.articles[11].content}</p>
        </div>`
        newsImage.setAttribute('src',newsData.articles[11].urlToImage)
        
        getNews().then(data => {
          moreData = data;
          
        text.innerHTML = `
        <p class="Ost">${newsData.articles[10].title}</p>`
        pic.setAttribute('src', newsData.articles[10].urlToImage )
        })
        getNews().then(data => {
          moreData1 = data;
          
        
        text1.innerHTML = `
        <p class="Obt">${moreData1.articles[2].title}</p>`
        pic1.setAttribute('src', moreData1.articles[2].urlToImage );
                
        })
        getNews().then(data => {
          moreData2 = data;
          
        
        text2.innerHTML = `
        <p class="Oct">${moreData2.articles[3].title}</p>`
        pic2.setAttribute('src', moreData2.articles[3].urlToImage );
                
        })
        getNews().then(data => {
          moreData3 = data;
          
        
        text3.innerHTML = `
        <p class="Oct">${moreData3.articles[7].title}</p>`
        pic3.setAttribute('src', moreData3.articles[7].urlToImage );
                
        });
        
})
.catch(err => console.log(err));





