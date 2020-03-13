
let slideIndex = 1;
let sbmit = document.querySelector(".signB");
const form = document.querySelector('.sign');

// how the side nav opens and close
function openNav() {
  document.getElementById("mySidenav").style.width = "265px";
  document.querySelector(".main").style.marginLeft = "265px";
  document.querySelector("#footer").style.marginLeft = "265px";
  document.querySelector('#logo').style.display = "none";


}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0";
  document.querySelector("#footer").style.marginLeft = "0";
  document.querySelector('#logo').style.display = "block";
}

// Subscription PopUp code inspired by W3Schools and edited

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("mySidenav").style.display = "none";
  document.querySelector('#logo').style.display = "block";
  document.querySelector(".main").style.marginLeft = "0px";
  document.querySelector("#footer").style.marginLeft = "0";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("mySidenav").style.display = "block";
  document.querySelector(".main").style.marginLeft = "260px";

}

  // Notifications PopUp Onclick Code

// const form = document.querySelector('.sign');
const notification = document.querySelector(".notification");
const wrapper = document.querySelector(".wrapper")
const submit = document.querySelector(".signB")

  notification.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display = "block";
    wrapper.style.display = "block";
});




// Timeout for the Bell

const bell = document.querySelector(".notification");

  setTimeout( () => {
    bell.style.display = "none";
  }, 10000 )

  // selection of gender

  let girl = document.querySelector("#female");
  let boy = document.querySelector("#male");

  girl.addEventListener('click', e =>{
    girl.style.fill = "palevioletred";
    boy.style.fill = "white";

  })

  boy.addEventListener('click', e =>{
    boy.style.fill = "blue";
    girl.style.fill = "white";
  })

  // Databases 
  // bookreview

  const formTwo = document.querySelector('#booked');
  const read = document.querySelector('.reader');

  const addReview = (BookReview, id) => {
    
     let html =`
     <div class="reading" data-id="${id}>
     <p class="title"><strong>${BookReview.Title}</strong></p>
     <p class="read">${BookReview.Review}</p>
     <p class="author">Author: <em>${BookReview.Author} </em></p>
 
                    <button class = "btn btn-danger btn-sm my-2">Delete</button>
                  </div>
                    `;
                    read.innerHTML += html;
                   
  };

  // deleting an entry

  const deleteReview = (id) => {
    const myReview = document.querySelectorAll('.reading');
    myReview.forEach(read =>{
      if(read.getAttribute('data-id')=== id){
        read.remove();
      }
    })
  }

  // get documents in real time

  db.collection('BookReviews').onSnapshot(snapshot =>{
    snapshot.docChanges().forEach(change =>{
      const doc = change.doc;

      if(change.type ==='added'){
        addReview(doc.data(), doc.id);
      }else if (change.type === 'removed'){
        deleteReview(doc.id);
      }
    });
  });

    // adding documents

  formTwo.addEventListener('submit', e => {
    e.preventDefault();

    const NewBookReview = {

      Title: formTwo.title.value,
      Review: formTwo.review.value,
      Author: formTwo.author.value
    };

    db.collection('BookReviews').add(NewBookReview).then(() =>{
      console.log('Book Review added')
  }).catch(err =>{
  
      console.log(err);
  })
  });

  // deleting reviews

  read.addEventListener('click', e =>{
    if(e.target.tagName === 'BUTTON'){
      const id = e.target.parentElement.getAttribute('data-id');

      db.collection('BookReviews').doc(id).delete().then(()=>{
        console.log('review deletd');
      });
    }
  });

  // hot topic

  const topic = document.querySelector('.Heater');


  const addTopic = (HotStorie, id) => {

    let time = (HotStorie.at.toDate());
    
    let html =`
    
    <p class="headline" data-id="${id}"><strong>${HotStorie.Headline}</strong></p>
    <br>
                        <img id="picture" src="${HotStorie.url}" alt="" width="400px" height="180px">
                        <br><br>
                        <p class="at">${time}</p>
                        
    
                   `;
                   topic.innerHTML += html;
                   
 };

 db.collection('HotStories').get().then((snapshot) =>{

  snapshot.docs.forEach(doc =>{
    addTopic(doc.data(),doc.id);
  })

}).catch(err => {
  console.log(err);
});

// Jokes

const formThree = document.querySelector('#jokester');
const jokes = document.querySelector('.joker');

const addJoke = (KnockJoke, id) => {

  let time = (KnockJoke.posted.toDate());
  
   let html =`
   <div class="jokeman" data-id="${id}">
   <p class="joke" data-id="${id}">${KnockJoke.joke}</p>
                <p class="by">by <em>${KnockJoke.by}</em></p>
                <p class="posted">${time}</p>

                  <button class = "btn btn-danger btn-sm my-2">Delete</button>
                </div>
                  `;
                  jokes.innerHTML += html;
                 
};

// deleting an entry

const deleteJoke = (id) => {
  const myJoke = document.querySelectorAll('.jokeman');
  myJoke.forEach(joke =>{
    if(joke.getAttribute('data-id')=== id){
      joke.remove();
    }
  })
}

// get documents in real time

db.collection('KnockJokes').onSnapshot(snapshot =>{
  snapshot.docChanges().forEach(change =>{
    const doc = change.doc;

    if(change.type ==='added'){
      addJoke(doc.data(), doc.id);
    }else if (change.type === 'removed'){
      deleteJoke(doc.id);
    }
  });
});

  // adding documents

formThree.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const NewJoke = {

    by: formThree.by.value,
    joke: formThree.yourjoke.value,
    posted:firebase.firestore.Timestamp.fromDate(now)
    
  };

  db.collection('KnockJokes').add(NewJoke).then(() =>{
    console.log('your joke added')
}).catch(err =>{

    console.log(err);
})
});

// deleting reviews

jokes.addEventListener('click', e =>{
  if(e.target.tagName === 'BUTTON'){
    const id = e.target.parentElement.getAttribute('data-id');

    db.collection('KnockJokes').doc(id).delete().then(()=>{
      console.log('your joke deletd');
    });
  }
});

// subscribing

const former = document.querySelector('.save')
// const save = document.querySelector(".subbtnEmail");

former.addEventListener('submit', e =>{
  e.preventDefault();

  const subscriber = {

    email: former.emailInput.value
  };

  db.collection('Subscribers').add(subscriber).then(() =>{
    console.log('email address added')
})
.catch(err => {
  console.log(err);
})

// form.style.display="none";
wrapper.style.display = "none";
 

});