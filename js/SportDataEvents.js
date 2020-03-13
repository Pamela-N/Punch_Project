//Adding subscribers on the subscribers database

const SubForm = document.querySelector('#SubForm');

SubForm.addEventListener('submit', e =>{
  e.preventDefault();
  
  //const now =  new Date();
  const Subcriber = {

    email: SubForm.emailInput.value, 

  }
  db.collection('Subscribers').add(Subcriber).then(() =>{
    console.log('subscriber added')
  }).catch(err =>{
    console.log(err);
  })
});


