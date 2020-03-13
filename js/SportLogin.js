const signUp = document.querySelector('.modals-content');
const logIn = document.querySelector('.loginForm');
const logOut = document.querySelector('..');
const log = document.querySelector('#loginbtn');
const sign = document.querySelector('.signupbtn');
const portal = document.querySelector('.optionPage');

let username = document.getElementById('user');
let password = document.getElementById('pass');

const usernaam = localStorage.getItem('usernaam');
const passwoord = localStorage.getItem('passwoord');
let loggedin = localStorage.getItem('loggedin');

loggedin = JSON.parse(loggedin);

const message = document.querySelector('.you');

if(loggedin){
    message.innerText = 'you are logged in...';
    portal.style.display = 'none';
    document.querySelector('.main').style.display = 'block';

} else {
    message.innerText = 'you are logged out...'
}

// Saving the information

sign.addEventListener('click', e =>{
    e.preventDefault();
 
    localStorage.setItem('user', username.value);
    localStorage.setItem('pass', password.value);

    const otherMessage = document.querySelector('.also');

    if(!username && !password && !loggedin){
        message.innerText = 'You are logged in';
        portal.style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    document.getElementById('#footer').style.display = 'block';

    } else if (username && user === username && !loggedin){
        otherMessage.innerText = 'That username already exists..'
        message.innerText = 'You are logged out...'
    }

})


// Using the infomation from setting on signing up to log in  

log.addEventListener('click', e =>{
    e.preventDefault()

    let userN = localStorage.getItem('user');
    let passW = localStorage.getItem('pass');

let userName = document.getElementById('name').value;
let passWord = document.getElementById('word').value;

if(userName ===  userN && passWord !== passW ){
    alert('That is the wrong password');
}else {
    message.innerText = 'You are logged in'
    portal.style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    localStorage.setItem('loggedin', true);
}


});

logOut.addEventListener('click', () =>{
    localStorage.setItem('logIn', 'false');
    message.innerText = 'You are logged Out';
    portal.style.display = 'block';
    document.querySelector('.main').style.display = 'none';
    document.getElementsByClassName('logoutbtnz').disabled = true;
    document.getElementsByClassName('logoutbtnz').style.backgroundColor = 'orange';


});




// //CORRECTED CORRECT CODE
// const loginForm = document.querySelector('.loginForm');
// const signForm = document.querySelector('.modals-content');
// const logout = document.querySelector('#logout');
// const msg = document.querySelector('.you');
// const othermsg = document.querySelector('.othermsg')

// let Username = localStorage.getItem('Username');
// let Password = localStorage.getItem('Password');
// let loggedIn = localStorage.getItem('loggedIn');
// loggedIn = JSON.parse(loggedIn);

// if (loggedIn){
//     msg.innerText =" You are logged in";
// }else {
//     msg.innerText = "you are logged out"
// }


// signForm.addEventListener('submit', e =>{
//     e.preventDefault();
//     let Username = localStorage.getItem('Username');
//     let Password = localStorage.getItem('Password');
//     let loggedIn = localStorage.getItem('loggedIn');
//     loggedIn = JSON.parse(loggedIn);

//     const newUsername = signForm.Username.value;
//     const newPassword = signForm.Password.value;
    
//     if(!Username&& !Password && !loggedIn){
//         localStorage.setItem('Username', newUsername);
//         localStorage.setItem('Password', newPassword);
//         msg.innerText = "You are loggedIn"
//     }else if(Username && newUsername === Username && !loggedIn){
//         othermsg.innerText = "That username already exists";
//         msg.innerText = "You are logged out"
//     }
//     signForm.reset();

// });

// loginForm.addEventListener('submit', e => {
//     e.preventDefault();

//     const newpassWord = loginForm.logPwd.value;
//     const newuserName = loginForm.logUser.value;

//     let Username = localStorage.getItem('Username');
//     let Password = localStorage.getItem('Password');
//     let loggedIn = localStorage.getItem('loggedIn');
//     loggedIn = JSON.parse(loggedIn);

//     if (newpassWord === Password && newuserName === Username && !loggedIn){

//         localStorage.setItem('logged', 'true');
//         msg.innerText = 'You are logged in'
//     } else if (logged){
//         othermsg.innerText = 'You are logged in'
//     } else if (Username === newuserName && newpassWord === Password && !loggedIn){
//         othermsg.innerText ="wrong password";
//     }
//     loginForm.reset();

// });

// logout.addEventListener('click', e =>{
//     localStorage.setItem('loggedIn', 'false')
//     msg.innerText = 'You are logged out'

// });




// //WORKING PROGRESS CODE
// const logbtn = document.querySelector('.logbtn');
// const main = document.querySelector('.main');
// const loginForm = document.querySelector('.loginForm');
// const signForm = document.querySelector('.modals-content');
// const optionPage = document.querySelector('.optionPage')
// const logout = document.querySelector('#logout');
// const msg = document.querySelector('.you');
// const othermsg = document.querySelector('.othermsg')

// //setting the variable for local storage

// let Username = localStorage.getItem('Username');
// let Password = localStorage.getItem('Password');
// let RepeatPassword = localStorage.getItem('RepeatPassword');
// let loggedIn = localStorage.getItem('loggedIn');
// loggedIn = JSON.parse(loggedIn);

// if (loggedIn){
//     msg.innerText =" You are logged in";
// }else {
//     msg.innerText = "you are logged out"
// }

// signForm.addEventListener('submit', e =>{
//     e.preventDefault();
//     let search = signForm.Username.value.trim().toLowerCase();
//     localStorage.setItem('Username', search); //saved username

//     let resu = signForm.Password.value.trim().toLowerCase();
//     localStorage.setItem('Password', resu); //saved password
    
//     msg.innerText= "You are logged in";

//      if (Username && Username === search && !loggedIn){
//          othermsg.innerText = "That username already exists";
//          msg.innerText = 'You are logged out'
//      }

//     signForm.reset();

//     console.log(search,resu);

//     // alert('thank you for signing up. Welcome to punchNews Paper')
//     //     setTimeout( () => {
//     //         main.style.display = "block";
//     //         optionPage.style.display = "none";
//     //       }, 500 )
    

// })


// let logUser = localStorage.getItem('logUser');
// let logPass = localStorage.getItem('logPwd')


// loginForm.addEventListener('submit', e =>{
//     e.preventDefault();

//     // main.style.display="block";
//     // optionPage.style.display = "none";


//     let storedUsername = localStorage.getItem('search');
//     let storedPassword = localStorage.getItem('resu');

//     console.log(storedUsername);

//     //data from the login form
//     let logUser = localStorage.getItem('logUser');
//     let logPwd = localStorage.getItem('logPwd');

//     //LU = loginForm.logUser.value.trim().toLowerCase();
//     //LP = loginForm.logPwd.value.trim().toLowerCase();


//     //Now im going to check if the information on the login page matches the info on the local storage and the login page

//     if(logUser != storedUsername && logPwd !== storedPassword){
//         alert('the information is incorrect')
        
//     } else {
//         alert('yippy, you are logged in');
//         setTimeout( () => {
//             main.style.display = "block";
//             optionPage.style.display = "none";
//           }, 500 )
//     }


//     // let user = localStorage.getItem('Username', data);
//     // let pas = localStorage.getItem('Pwrd', datas);
//     // console.log(user,pas);


// });

// logout.addEventListener('click', e =>{
    
//     main.style.display="none";
//     optionPage.style.display = "block";

// })




