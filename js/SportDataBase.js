//Database for the OtherNews Section on the Punch Sports page 

const OthrNws = document.querySelector('.img5');

const addOtherNews = (OtherNew) => {

  
  let html = 
  `
  <div class="img5">
            <a href="SoccerSportArticle.html"><img src="${OtherNew.image}" alt="men kicking a soccer ball on the field" width="100%">
            </div>
            <br><br>
            <div class="img5t">
              <p><strong>${OtherNew.Name}</strong></p>
              <br>
              <p>${OtherNew.content}</p>
            </a>
          </div>
            `
            
            OthrNws.innerHTML += html;
}

db.collection('OtherNews').get().then((snapshot) =>{

  snapshot.docs.forEach(doc =>{
    addOtherNews(doc.data());
  })

}).catch(err => {
  console.log(err);
});

//Database for the Comment Section on the Sports Article page 

const writter = document.querySelector('.newie4');


const addComments = (Comment, id) => {

  //let time = (Comment.time.toDate());
  let html = 
  `
      <div class="each" data.id="${id}">
          <button class="delete">Delete</button>
          <img src="${Comment.image}" alt="${Comment.alt}" class="newCom1">
          <h4 class='Mpho1'>${Comment.Name}</h4>
          <p class='MphoT1'>${Comment.content}</p>
          <p class= "time1">12:27</p>
          <p class="numbre1">${Comment.number}</p>
      </div>         

            `
            //console.log(html);
            writter.innerHTML += html;
}
//Everything loaded we on the pages but the deleting option on my side was a problem as i couldnt identify what the problem was, we check with each other as a team but we couldnt find where the issue is.  So i am sending this unfished code, everything is done but just the delete option, may you kindly advice me of my error should you pick it up so i keep note for future ref.Thanking you.

//DELETING THE CONTENT OF THE COMMENT
const DeleteComments =  (id) => {
  const Comments = document.querySelectorAll('.each');

  console.log(Comments);
  Comments.forEach(Comments => {
      if(Comments.getAttribute('data-id') === id){

        Comments.remove();
      }    
  });
};
//GETTING DOCUMENT IN REALTIME, OR EVERYTIME IT CHANGES

db.collection('Comments').onSnapshot(snapshot =>{

  snapshot.docChanges().forEach(change =>{
      const doc = change.doc;
    
      if(change.type === 'added'){
        addComments(doc.data(),doc.id);
      }else if (change.type === 'removed'){
        DeleteComments(doc.id);
      }
  });
});


//Deleting the list items (COME BACK TO THIS AS ITS NOT WORKING)

writter.addEventListener('click', e =>{
   console.log(e);

  e.preventDefault();
  if (e.target.tagName === 'button'){
      const id = e.target.childElement.getAttribute('data-id');
      console.log(id);
      db.collection('Comments').doc(id).delete().then(() =>{
          console.log('Comment deleted');
      }).catch(err =>{
        console.log(err);
      });
  }
});
//MAKING AN OPTION FOR THE COMMENT FORM TO ALLOW ACCESS

const ComForm = document.querySelector('#ComForm');

ComForm.addEventListener('submit', e =>{
  e.preventDefault();

  //const now = new Date();

  const NewComment = {
    
    Name: ComForm.ComName.value,
    image: ComForm.ComImg.value,
    content: ComForm.say.value,
    number: ComForm.ComNum.value
  

  };
  
  
  db.collection('Comments').add(NewComment).then(() =>{
    console.log('comment added');

  }).catch(err =>{
    console.log(err);
  })
})


//Database for the MoreNews section on the Sports Article page. EVERYTHING WORKS WELL AND HAS BEEN STYLED

const News = document.querySelector('.DataNews');

const addMoreNews = (MoreNew) => {


  let html = 
  `
  <img src="${MoreNew.image}" alt="${MoreNew.alt}"width="100%" class="Oc" >
        <br><br>
        <p class="Author">Written by: ${MoreNew.author}</p>
        <p class="skhathi">14.03</p>
        <p class="Oct1">${MoreNew.Title}</p>
        <br>
            `
            
            News.innerHTML += html;
}

db.collection('MoreNews').get().then((snapshot) =>{

  snapshot.docs.forEach(doc =>{
    addMoreNews(doc.data());
  })

}).catch(err => {
  console.log(err);
});




