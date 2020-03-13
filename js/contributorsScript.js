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

//popup for plus icon clicked to show commenting option 

const btn = document.querySelector('.addMore');
const addContr = document.querySelector('.contrAdd');

const wrapper2 = document.querySelector('.popupWrapper');
const wrapper3 = document.querySelector('.wrapperContr');

const close = document.querySelector('.vala');
const close2 = document.querySelector('.conVala');

const btn2 = document.querySelector('.senda');
const btn3 = document.querySelector('.sendas');



btn.addEventListener('click', () => {
  wrapper2.style.display ='block'; 
});

addContr.addEventListener('click', () => {
  wrapper3.style.display ='block'; 
});

close.addEventListener('click', ()=> {
  wrapper2.style.display  ="none";
});

close2.addEventListener('click', ()=> {
  wrapper3.style.display  ="none";
});

//this is for the  button on the popup that will allow you to submit the info on the popup page to go to the reset pasword page

btn2.addEventListener('click', () => {
  wrapper2.style.display = 'none';
});

//database

const heroDiv = document.querySelector(".yourHero");
const formCon = document.querySelector(".addYourHero");
// const buttton = document.querySelector(".senda");

const heroAdd = (hero, id)=>{
  let html =
  `
  <div class="heroWeekDiv" data-id="${id}">
    <img class="heroWeek" src="${hero.img}" alt="hero">
    <br>
    <h3 class="heading">${hero.title}</h3>
    <br>
    
    <p class="story">${hero.story}</p>
    <br>
    <button class="storyBtn">Delete</button>
    <br><br><br>
  <div>
  `
  heroDiv.innerHTML += html;
}


// db.collection('yourHero').get().then((snapshot)=>{
//     //do something when we have data
//     //console.log(snapshot.docs[0].data());
//     snapshot.docs.forEach(doc => {
//         //console.log(doc.id); //check the ids
//         heroAdd(doc.data());
//         // console.log(doc.data());
//     });
// }).catch(err=>{
//     console.log(err);
// });

db.collection('yourHero').onSnapshot(snapshot =>{
  //console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change =>{
      const doc = change.doc;

      if(change.type === 'added'){
          heroAdd(doc.data(), doc.id);
      }else if(change.type ==="removed"){
          deleteHero(doc.id);
      }

  });

});

// deleting
const deleteHero =(id)=>{
  const yourHero = document.querySelectorAll(".heroWeekDiv");
  yourHero.forEach(hero=>{
      if(hero.getAttribute('data-id')===id){
          hero.remove();
      }
  });
}

//adding a document
formCon.addEventListener('submit',e =>{
  e.preventDefault();
  const hero ={
      img: formCon.urlImage.value,
      title: formCon.title.value,
      story: formCon.storys.value
  };

  db.collection('yourHero').add(hero).then(()=>{

      console.log('hero added');
  }).catch(err=>{
      console.log(err);
  })

})

//deleting list items

heroDiv.addEventListener('click',e=>{
  //console.log(e);

  if(e.target.tagName === "BUTTON"){
      const id = e.target.parentElement.getAttribute('data-id');

      db.collection("yourHero").doc(id).delete().then(()=>{
          console.log('hero deleted');
      });

  }
});

// second

const contrDiv = document.querySelector(".freeCon");
const formCon2 = document.querySelector(".addYourHero2");

const contributorAdd = (butor)=>{
  let html =
  `
  <img class="editer" src="${butor.image}" width="80px" height="150px" alt="Image">
  <div class="writer-name">
    <h2>${butor.name}</h2>

    <p>${butor.about}</p>
  </div>
  <br><br>
  `
  contrDiv.innerHTML += html
}


db.collection('Contributors').get().then((snapshot)=>{
    //do something when we have data
    //console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        //console.log(doc.id); //check the ids
        contributorAdd(doc.data());
        // console.log(doc.data());
    });
}).catch(err=>{
    console.log(err);
});

//subscribe call to acton button
const formsign = document.querySelector(".formsign");
const subbtnEmail = document.querySelector(".subbtnEmail");
//adding a document
subbtnEmail.addEventListener('click',e =>{
  e.preventDefault();
  const mail ={
      email: formsign.emailInput.value
  };

  db.collection('Subscribers').add(mail).then(()=>{
      if(mail === " "){
        alert('You have not subcribed to Punch :(');
      }else{
        alert("You will get email update ;)");
      }
      
  }).catch(err=>{
      console.log(err);
  })
   wrapper.style.display = "none";
})


// this whole code was suppose to add the username to be able to log in with local Storage but now it does not work and i dont wanna delete it yet.

// let portal = document.querySelector(".portalPage");
// let signForm = document.querySelector(".modals-content");
// let loginForm = document.querySelector(".modal-content");
// let submitBut = document.querySelector(".signupbtns");
// let logBut =  document.querySelector(".loginBut");

// const signUp = document.querySelector('.modals-content');
// const logIn = document.querySelector('.modal-content');
// const logOut = document.querySelector('.logoutbtn');
// const log = document.querySelector('.loginBut');
// const sign = document.querySelector('.signupbtns');
// const portal = document.querySelector('.portalPage');

// let username = document.getElementById('user');
// let password = document.getElementById('pass');

// const usernaam = localStorage.getItem('usernaam');
// const passwoord = localStorage.getItem('passwoord');
// let loggedin = localStorage.getItem('loggedin');

// loggedin = JSON.parse(loggedin);

// const message = document.querySelector('.you');

// if(loggedin){
//     message.innerText = 'you are logged in...';
//     portal.style.display = 'none';
//     document.querySelector('.main').style.display = 'block';

// } else {
//     message.innerText = 'you are logged out...'
// }

// // Saving the information

// sign.addEventListener('click', e =>{
//     e.preventDefault();
 
//     localStorage.setItem('user', username.value);
//     localStorage.setItem('pass', password.value);

//     const otherMessage = document.querySelector('.also');

//     if(!username && !password && !loggedin){
//         message.innerText = 'You are logged in';
//         portal.style.display = 'none';
//     document.querySelector('.main').style.display = 'block';
//     document.getElementById('#footer').style.display = 'block';

//     } else if (username && user === username && !loggedin){
//         otherMessage.innerText = 'That username already exists..'
//         message.innerText = 'You are logged out...'
//     }

// })


// Using the infomation from setting on signing up to log in  

// log.addEventListener('click', e =>{
//     e.preventDefault()

//     let userN = localStorage.getItem('user');
//     let passW = localStorage.getItem('pass');

// let userName = document.getElementById('name').value;
// let passWord = document.getElementById('word').value;

// if(userName ===  userN && passWord !== passW ){
//     alert('That is the wrong password');
// }else {
//     message.innerText = 'You are logged in'
//     portal.style.display = 'none';
//     document.querySelector('.main').style.display = 'block';
//     localStorage.setItem('loggedin', true);
// }


// });

// logOut.addEventListener('click', () =>{
//     localStorage.setItem('logIn', 'false');
//     message.innerText = 'You are logged Out';
//     portal.style.display = 'block';
//     document.querySelector('.main').style.display = 'none';
//     document.getElementsByClassName('logoutbtnz').disabled = true;
//     document.getElementsByClassName('logoutbtnz').style.backgroundColor = 'orange';


// });




















// // let usernameInput = document.querySelector("#username").value;
// // let passwordInput = document.querySelector("#password").value;
// // let savedUsername = localStorage.getItem("username");
// // console.log(username);  

//   let username = localStorage.getItem('username');
//   let password = localStorage.getItem('password');


// // console.log(username);
// signForm.addEventListener('submit', e =>{
//   e.preventDefault();
//   let username = localStorage.getItem('username');
//   let password = localStorage.getItem('password');
//   let inpteUser = signForm.username.value;
//   let inputPass = signForm.password.value;


//   if(!username && !password){
//     submitBut.addEventListener("click", e =>{
//       e.preventDefault();
//       localStorage.setItem('username',inpteUser);
//       localStorage.setItem('password',inputPass);
//       document.querySelector(".main").style.display = "block";
//       portal.style.display ="none";
     
//     });
  

//   }else if(username && inpteUser === username){

//   }
//   // signForm.reset();
// });

// loginForm.addEventListener('submit', e =>{
//   e.preventDefault();
//   let username = localStorage.getItem('username');
//   let password = localStorage.getItem('password');
//   let loginUser = loginForm.usernameLog.value;
//   let LoginPass = loginForm.passwordLog.value;


// if(loginUser === username && LoginPass === password){
//    logbut.addEventListener("click", e =>{
//       e.preventDefault();
//       document.querySelector(".main").style.display = "block";
//       portal.style.display ="none";
     
//     });

//    }
//   loginForm.reset();
// });