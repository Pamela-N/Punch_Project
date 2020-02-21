const balImage  = document.querySelector('#ball');
const articleC = document.querySelector('#rite');
const picture = document.querySelector('#swim')
const title = document.querySelector('#win')
const picture1 = document.querySelector('#basket')
const title1 = document.querySelector('#kobe')
const picture2 = document.querySelector('#cri')
const title2 = document.querySelector('#crit')

const ase = "http://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=a9653deccaa24ed2b76197d55b4d7cdf";

const SoccerNews = async () => {
  const response = await fetch(ase);
  const data = await response.json();

  return data;

};

SoccerNews()
.then(data => {
  newsData = data;
  console.log (newsData);

articleC.innerHTML = 

  `<h3 class= "write">${newsData.articles[11].title}</h3>`
        balImage.setAttribute('src',newsData.articles[11].urlToImage)
        
        SoccerNews().then(data => {
          swimData = data;
          
        title.innerHTML = `
        <h3>${swimData.articles[10].title}</h3>`
        picture.setAttribute('src', swimData.articles[10].urlToImage )
        })
        SoccerNews().then(data => {
          moreData1 = data;
          
        
        title1.innerHTML = `
        <h3 id="kobe">${moreData1.articles[2].title}</h3>`
        picture1.setAttribute('src', moreData1.articles[2].urlToImage );
                
        })
        SoccerNews().then(data => {
          moreData2 = data;
          
        
        title2.innerHTML = `
        <h3 id="crit">${moreData2.articles[3].title}</h3>`
        picture2.setAttribute('src', moreData2.articles[3].urlToImage );
                
        })
        // getNews().then(data => {
        //   moreData3 = data;
          
        
        // text3.innerHTML = `
        // <p class="Oct">${moreData3.articles[7].title}</p>`
        // pic3.setAttribute('src', moreData3.articles[7].urlToImage );
                
        // });
        
})
.catch(err => console.log(err));
