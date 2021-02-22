// ApiKey 
// 88403fd3edae4666b335af9727412993
// Top headlines in the US
// https://newsapi.org/v2/top-headlines?country=us&apiKey=88403fd3edae4666b335af9727412993
// Top headlines from India
// http://newsapi.org/v2/top-headlines?country=in&apiKey=88403fd3edae4666b335af9727412993

//document.getElementById('btn1').addEventListener('click', getData1);
//document.getElementById('btn2').addEventListener('click', getData2);

function getData() {
   axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=88403fd3edae4666b335af9727412993')
        .then((res) => {
            console.log(res.articles);
            let latestNews = res.articles;
         //   console.log(latestNews);
            var newsContent = '';
           
            for (var i in latestNews) {
            newsContent +=
        
            `<div class="newsContent">
         <div class="card-image">
         <img  src="${latestNews[i].urlToImage}">
         </div>
         <div class="card-title">
         <h6>${latestNews[i].title}</h6>
         </div>
         <div class="card-des">
         <p>${latestNews[i].description}</p>
         </div>
         <div class="btn">
         <a href="${latestNews[i].url}">READ MORE</a>
         </div>
         </div>`; }
         document.getElementById('box').innerHTML = newsContent; 
        }).catch(err=> console.log(err));
}

/*function getData2(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=88403fd3edae4666b335af9727412993')
        
        .then((data) => {
            console.log(data);

            var newsContent = '';
            let latestNews = data.articles;
            for (var i in latestNews) {
                newsContent +=
                    `<div class="newsContent">
         
                  <div class="card-image">
         <img  src="${latestNews[i].urlToImage}">
         </div>
         <div class="card-title">
         <h6>${latestNews[i].title}</h6>
         </div>
         <div class="card-des">
         <p>${latestNews[i].description}</p>
         </div>
         <div class="btn">
         <a href="${latestNews[i].url}">READ MORE</a>
         </div>
         </div>`;
            }
             document.getElementById('box').innerHTML = newsContent;
        }).catch(err=> console.log(err));

   }*/