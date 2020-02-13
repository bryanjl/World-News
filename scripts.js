//news api authentication 9b98cfe67cbe4cab821c4d8538986814

let sourceArr = ['ABC News', 'ABC News (AU)', 'Aftenposten', 'Al Jazeera English', 'ANSA.it', 'Argaam', 'Ars Technica', 'Ary News', 'Associated Press', 'Australian Financial Review', 'Axios', 'BBC News', 'BBC Sport', 'Bild', 'Blasting News (BR)', 'Bleacher Report', 'Bloomberg', 'Breitbart News', 'Business Insider', 'Business Insider (UK)', 'Buzzfeed', 'CBC News', 'CBS News', 'CNBC', 'CNN', 'CNN Spanish', 'Crypto Coins News', 'Der Tagesspiegel', 'Die Zeit', 'El Mundo', 'Engadget', 'Entertainment Weekly', 'ESPN', 'ESPN Cric Info', 'Financial Post', 'Focus', 'Football Italia', 'Fortune', 'FourFourTwo', 'Fox News', 'Fox Sports', 'Globo', 'Google News', 'Google News (Argentina)', 'Google News (Australia)', 'Google News (Brasil)', 'Google News (Canada)', 'Google News (France)', 'Google News (India)', 'Google News (Israel)', 'Google News (Italy)', 'Google News (Russia)', 'Google News (Saudi Arabia)', 'Google News (UK)', 'Göteborgs-Posten', 'Gruenderszene', 'Hacker News', 'Handelsblatt', 'IGN', 'Il Sole 24 Ore', 'Independent', 'Infobae', 'InfoMoney', 'La Gaceta', 'La Nacion', 'La Repubblica', 'Le Monde', 'Lenta', 'Lequipe', 'Les Echos', 'Libération', 'Marca', 'Mashable', 'Medical News Today', 'MSNBC', 'MTV News', 'MTV News (UK)', 'National Geographic', 'National Review', 'NBC News', 'News24', 'New Scientist', 'News.com.au', 'Newsweek', 'New York Magazine', 'Next Big Future', 'NFL News', 'NHL News', 'NRK', 'Politico', 'Polygon', 'RBC', 'Recode', 'Reddit /r/all', 'Reuters', 'RT', 'RTE', 'RTL Nieuws', 'SABQ', 'Spiegel Online', 'Svenska Dagbladet', 'T3n', 'TalkSport', 'TechCrunch', 'TechCrunch (CN)', 'TechRadar', 'The American Conservative', 'The Globe And Mail', 'The Hill', 'The Hindu', 'The Huffington Post', 'The Irish Times', 'The Jerusalem Post', 'The Lad Bible', 'The Next Web', 'The Sport Bible', 'The Times of India', 'The Verge', 'The Wall Street Journal', 'The Washington Post', 'The Washington Times', 'Time', 'USA Today', 'Vice News', 'Wired', 'Wired.de', 'Wirtschafts Woche', 'Xinhua Net', 'Ynet'];

let selectSource = document.getElementById('source');

sourceArr.forEach(source => {
    let option = document.createElement('option');
    option.text = source;
    selectSource.appendChild(option);
});


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

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b98cfe67cbe4cab821c4d8538986814';
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
    .catch(err => console.log(err));



function createArticle(articleArr){
    let parDiv = document.getElementById('body-wrap');
    for(let i = 0; i<articleArr.length; i++){
        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        newImg.src = articleArr[i].urlToImage;
        newDiv.className = 'news-article';
        
        parDiv.appendChild(newDiv);
        newDiv.innerHTML = articleArr[i].title;
        newDiv.appendChild(newImg);

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

// let isClick = document.getElementById('button');
// isClick.addEventListener('click', topHeadlines);



// console.log('Hello');

// let request = new XMLHttpRequest();

// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b98cfe67cbe4cab821c4d8538986814';

// request.open('GET', url, true);

// request.onload = function() {
//     let data = JSON.parse(this.response);
//     console.log(data);

// }

// request.send();