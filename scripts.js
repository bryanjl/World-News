//news api authentication 9b98cfe67cbe4cab821c4d8538986814

let sourceArr = ['ABC News', 'ABC News (AU)', 'Aftenposten', 'Al Jazeera English', 'ANSA.it', 'Argaam', 'Ars Technica', 'Ary News', 'Associated Press', 'Australian Financial Review', 'Axios', 'BBC News', 'BBC Sport', 'Bild', 'Blasting News (BR)', 'Bleacher Report', 'Bloomberg', 'Breitbart News', 'Business Insider', 'Business Insider (UK)', 'Buzzfeed', 'CBC News', 'CBS News', 'CNBC', 'CNN', 'CNN Spanish', 'Crypto Coins News', 'Der Tagesspiegel', 'Die Zeit', 'El Mundo', 'Engadget', 'Entertainment Weekly', 'ESPN', 'ESPN Cric Info', 'Financial Post', 'Focus', 'Football Italia', 'Fortune', 'FourFourTwo', 'Fox News', 'Fox Sports', 'Globo', 'Google News', 'Google News (Argentina)', 'Google News (Australia)', 'Google News (Brasil)', 'Google News (Canada)', 'Google News (France)', 'Google News (India)', 'Google News (Israel)', 'Google News (Italy)', 'Google News (Russia)', 'Google News (Saudi Arabia)', 'Google News (UK)', 'Göteborgs-Posten', 'Gruenderszene', 'Hacker News', 'Handelsblatt', 'IGN', 'Il Sole 24 Ore', 'Independent', 'Infobae', 'InfoMoney', 'La Gaceta', 'La Nacion', 'La Repubblica', 'Le Monde', 'Lenta', 'Lequipe', 'Les Echos', 'Libération', 'Marca', 'Mashable', 'Medical News Today', 'MSNBC', 'MTV News', 'MTV News (UK)', 'National Geographic', 'National Review', 'NBC News', 'News24', 'New Scientist', 'News.com.au', 'Newsweek', 'New York Magazine', 'Next Big Future', 'NFL News', 'NHL News', 'NRK', 'Politico', 'Polygon', 'RBC', 'Recode', 'Reddit /r/all', 'Reuters', 'RT', 'RTE', 'RTL Nieuws', 'SABQ', 'Spiegel Online', 'Svenska Dagbladet', 'T3n', 'TalkSport', 'TechCrunch', 'TechCrunch (CN)', 'TechRadar', 'The American Conservative', 'The Globe And Mail', 'The Hill', 'The Hindu', 'The Huffington Post', 'The Irish Times', 'The Jerusalem Post', 'The Lad Bible', 'The Next Web', 'The Sport Bible', 'The Times of India', 'The Verge', 'The Wall Street Journal', 'The Washington Post', 'The Washington Times', 'Time', 'USA Today', 'Vice News', 'Wired', 'Wired.de', 'Wirtschafts Woche', 'Xinhua Net', 'Ynet'];
let jsonCountData = '{"United Arab Emirates (the)":"AE","Argentina":"AR","Austria":"AT","Australia":"AU","Belgium":"BE","Bulgaria":"BG","Brazil":"BR","Canada":"CA","Switzerland":"CH","China":"CN","Colombia":"CO","Cuba":"CU","Czechia":"CZ","Germany":"DE","Egypt":"EG","France":"FR","United Kingdom of Great Britain and Northern Ireland (the)":"GB","Greece":"GR","Hong Kong":"HK","Hungary":"HU","Indonesia":"ID","Ireland":"IE","Israel":"IL","India":"IN","Italy":"IT","Japan":"JP","Korea (the Republic of)":"KR","Lithuania":"LT","Latvia":"LV","Morocco":"MA","Mexico":"MX","Malaysia":"MY","Nigeria":"NG","Netherlands (the)":"NL","Norway":"NO","New Zealand":"NZ","Philippines (the)":"PH","Poland":"PL","Portugal":"PT","Romania":"RO","Serbia":"RS","Russian Federation (the)":"RU","Saudi Arabia":"SA","Sweden":"SE","Singapore":"SG","Slovenia":"SI","Slovakia":"SK","Thailand":"TH","Turkey":"TR","Taiwan (Province of China)":"TW","Ukraine":"UA","United States of America (the)":"US","Venezuela (Bolivarian Republic of)":"VE","South Africa":"ZA"}'
let countryData = JSON.parse(jsonCountData);




//populate the news sources options on index.html
let selectSource = document.getElementById('source');
sourceArr.forEach(source => {
    let option = document.createElement('option');
    option.text = source;
    selectSource.appendChild(option);
});

//read file and make object of countries and two letter and three letter country codes


//populate countries option on index.html
let countrySelect = document.getElementById('country');
Object.keys(countryData).forEach(country => {
    let option = document.createElement('option');
    option.text = country;
    countrySelect.appendChild(option);
});




const baseUrl = 'https://newsapi.org/v2/';
const apiKey = 'apiKey=9b98cfe67cbe4cab821c4d8538986814';


//search button click
let isClick = document.getElementById('button');
isClick.addEventListener('click', search);

//event listener for the checkbox click
//so both checkboxes cant be selected
let everythingCheck = document.getElementById('everything');
everythingCheck.addEventListener('change', function(){
    headlinesCheck.checked = false;
});
let headlinesCheck = document.getElementById('top-headlines');
headlinesCheck.addEventListener('change', function() {
    everythingCheck.checked = false;
});





function search(){

    let parDiv = document.getElementById('body-wrap');
    while(parDiv.firstChild){
        parDiv.removeChild(parDiv.firstChild);
    }

    //see if checkboxes are checked to find the proper endpoint
    //default is top headlines
    let endpoint = 'top-headlines?';
    if(everythingCheck.checked){
        endpoint = 'everything?';
    }

    //get query text from user
    let keywordInput = document.getElementById('keyword').value;
    let query = '';
    if(keywordInput.length > 0){
        query = `q=${encodeURIComponent(keywordInput)}&`;
    } 
    //console.log(query);
    //get country from user
    let countSelect = document.getElementById('country');
    //console.log(countSelect.options[countSelect.selectedIndex].text);
    let countryApi = '';
    if (countSelect.options[countSelect.selectedIndex].text == 'All'){
        countryApi = '';
    } else {
        let tempCount = countryData[countSelect.options[countSelect.selectedIndex].text];
        tempCount = tempCount.toLowerCase();
        countryApi = `country=${tempCount}&`;
    }
    console.log(countryApi);

    let url = `${baseUrl}${endpoint}${countryApi}${query}${apiKey}`;
    console.log(url);

    let articleArr = [];

    makeRequest(url)
        .then(data => {
            data1 = JSON.parse(data);
            articleArr = data1.articles;
            return articleArr;
        })
        .then(articleArr => {
            createArticle(articleArr);
        })
        .catch(err => console.log(`Didn't Work ${err}`));

}






function makeRequest(url){
    let request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        request.onload = function (){
            if(request.status >= 200 && request.status < 300){
                resolve(request.response);
            } else {
                reject({
                    status: request.status,
                    statusText: request.statusText
                })
            }
        }
        request.open('GET', url, true);
        request.send();
    });
}







function createArticle(articleArr){
    let parDiv = document.getElementById('body-wrap');
    for(let i = 0; i<articleArr.length; i++){
        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        let newP = document.createElement('p');
        let newHead = document.createElement('h3');
        newDiv.className = 'news-article';        
        parDiv.appendChild(newDiv);
        newP.innerHTML = articleArr[i].description;
        newHead.innerHTML = articleArr[i].title;
        newImg.src = articleArr[i].urlToImage;
        
        
        newDiv.appendChild(newImg);
        newDiv.appendChild(newP);
        newDiv.appendChild(newHead);

    }
}










// request.open('GET', url, true);

// let articles = [];

// request.onload = function() {
//     if(request.status == 200){
//         let data = JSON.parse(this.response);
//         articles = data.articles;
//         document.getElementById('check').innerHTML = articles[0].title;
//     } else {
//         console.log('some kind of error');
//     }
// }

// async function topHeadlines(){
//     request.send();
    
// }





// console.log('Hello');

// let request = new XMLHttpRequest();

// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b98cfe67cbe4cab821c4d8538986814';

// request.open('GET', url, true);

// request.onload = function() {
//     let data = JSON.parse(this.response);
//     console.log(data);

// }

// request.send();

