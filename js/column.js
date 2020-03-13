let notification = document.querySelector('#notification');
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');
const wrapper = document.querySelector(".wrapper");
let girl = document.querySelector("#female");
let boy = document.querySelector("#male");

// how the side nav opens
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.querySelector(".main").style.marginLeft = "260px";
  document.querySelector(".column1").style.display="none";

}

// this is how the nav closes
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0px";
  document.querySelector(".main").style.marginLeft = "0px";
  document.querySelector(".column1").style.display="block";
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
})

// notification bell comands for the popup this is the way it closes.
form.addEventListener('click', e =>{
  e.preventDefault();
  form.style.display = "none";
  wrapper.style.display = "none";
  alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.')
})

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

// notification bell comands for the bell to dissappear
setTimeout( () => {
  notification.style.display = "none";
}, 10000 )

//popup for plus icon clicked to show commenting option 

const btn = document.querySelector('.addMore');
const wrapper2 = document.querySelector('.popupWrapper');
const close = document.querySelector('.vala');
const btn2 = document.querySelector('.senda');

btn.addEventListener('click', () => {
  wrapper2.style.display ='block'; 
});

close.addEventListener('click', ()=> {
  wrapper2.style.display  ="none";
});

const commentDiv = document.querySelector(".newie3");
const formCon = document.querySelector(".addYourHero");

const addComment = (comment)=>{
  let time = (comment.timedate.toDate());
  let html =
  `
  <img src="${comment.image}" alt="us" width= "100px" class="newCom3" alt="us.jpg">
  <div class="commentLeft">
      
      <h4 class='Us'>${comment.name}</h4>
      <p class='UsT'>${comment.comment}</p>
      <br>
      <p class= "nako1"><b>${time}<b></p>
  </div>
  
  <br>
  `
  commentDiv.innerHTML += html;
}


db.collection('heroComment').get().then((snapshot)=>{
    //do something when we have data
    //console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        //console.log(doc.id); //check the ids
        addComment(doc.data());
        // console.log(doc.data());
    });
}).catch(err=>{
    console.log(err);
});

formCon.addEventListener('submit',e =>{
  e.preventDefault();

  const now = new Date(); //creat a new date
  const recipe ={
      title: form.userRecipe.value,
      created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('recipes').add(recipe).then(()=>{

      console.log('recipe added');
  }).catch(err=>{
      console.log(err);
  })

})