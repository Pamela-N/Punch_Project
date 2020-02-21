// let notification = document.querySelector('#notification');
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
// const submit = document.querySelector(".signB")

  notification.addEventListener('click', e =>{
    e.preventDefault();
    form.style.display = "block";
    wrapper.style.display = "block";
})
  form.addEventListener('sumbit', e =>{
  e.preventDefault();
  form.style.display="none";
  wrapper.style.display = "none"; 
  alert('Thank you for subscribing to Punch notifications, we will be sending you exciting updates on your cellphone number everyday from now on.')
})

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

//   api

const base='https://api.exchangeratesapi.io/2019-02-19?base=ZAR';
const first = document.querySelector(".first");

const getUpdate = async()=>{
    const responseOne = await fetch(base)
    const dataOne = await responseOne.json();
    return dataOne;

};

getUpdate()
.then(dataOne=>{
  money = dataOne;

 const {CAD, EUR, NZD, AUD, USD} = money.rates;
  first.innerHTML = `
      <p>
          <h3>A Year Ago...</h3>
          <br>
          CAD: ${CAD.toFixed(2)}<br>
          EUR: ${EUR.toFixed(2)}<br>
          NZD: ${NZD.toFixed(2)} <br>
          AUD: ${AUD.toFixed(2)}<br> 
          USD: ${USD.toFixed(2)}<br>
  </p>`;

  console.log(money);
})
.catch(err=>console.log(err));

// Second Api


const baseTwo= 'https://api.exchangeratesapi.io/2020-02-19?base=ZAR';
const second = document.querySelector(".second");

const getUpdateAgain = async()=>{
    const response = await fetch(baseTwo)
    const data = await response.json();
    return data;

};

getUpdateAgain()
.then(data=>{
  geld = data;

 const { CAD, EUR, NZD , AUD ,USD} = geld.rates;

  second.innerHTML = `
      <p>
          <h3>Today...</h3>
          <br>
          CAD: ${CAD.toFixed(2)}<br>
          EUR: ${EUR.toFixed(2)}<br> 
          NZD: ${NZD.toFixed(2)}<br>
          AUD: ${AUD.toFixed(2)}<br> 
          USD: ${USD.toFixed(2)}

      </p>
`;

  console.log(geld);
})
.catch(err=>console.log(err));