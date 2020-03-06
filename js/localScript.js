// Creating the Functionality

const signUp = document.querySelector('.modals-content');
const logIn = document.querySelector('.modal-content');
const logOut = document.querySelector('.logoutbtn');
const log = document.querySelector('#loginbtn');
const sign = document.querySelector('#signupbtn');
const portal = document.querySelector('main');

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

    if(userName ===  userN && passWord === passW){
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

