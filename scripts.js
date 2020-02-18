//news api authentication 9b98cfe67cbe4cab821c4d8538986814

let sourceArr = ['ABC News', 'ABC News (AU)', 'Aftenposten', 'Al Jazeera English', 'ANSA.it', 'Argaam', 'Ars Technica', 'Ary News', 'Associated Press', 'Australian Financial Review', 'Axios', 'BBC News', 'BBC Sport', 'Bild', 'Blasting News (BR)', 'Bleacher Report', 'Bloomberg', 'Breitbart News', 'Business Insider', 'Business Insider (UK)', 'Buzzfeed', 'CBC News', 'CBS News', 'CNBC', 'CNN', 'CNN Spanish', 'Crypto Coins News', 'Der Tagesspiegel', 'Die Zeit', 'El Mundo', 'Engadget', 'Entertainment Weekly', 'ESPN', 'ESPN Cric Info', 'Financial Post', 'Focus', 'Football Italia', 'Fortune', 'FourFourTwo', 'Fox News', 'Fox Sports', 'Globo', 'Google News', 'Google News (Argentina)', 'Google News (Australia)', 'Google News (Brasil)', 'Google News (Canada)', 'Google News (France)', 'Google News (India)', 'Google News (Israel)', 'Google News (Italy)', 'Google News (Russia)', 'Google News (Saudi Arabia)', 'Google News (UK)', 'Göteborgs-Posten', 'Gruenderszene', 'Hacker News', 'Handelsblatt', 'IGN', 'Il Sole 24 Ore', 'Independent', 'Infobae', 'InfoMoney', 'La Gaceta', 'La Nacion', 'La Repubblica', 'Le Monde', 'Lenta', 'Lequipe', 'Les Echos', 'Libération', 'Marca', 'Mashable', 'Medical News Today', 'MSNBC', 'MTV News', 'MTV News (UK)', 'National Geographic', 'National Review', 'NBC News', 'News24', 'New Scientist', 'News.com.au', 'Newsweek', 'New York Magazine', 'Next Big Future', 'NFL News', 'NHL News', 'NRK', 'Politico', 'Polygon', 'RBC', 'Recode', 'Reddit /r/all', 'Reuters', 'RT', 'RTE', 'RTL Nieuws', 'SABQ', 'Spiegel Online', 'Svenska Dagbladet', 'T3n', 'TalkSport', 'TechCrunch', 'TechCrunch (CN)', 'TechRadar', 'The American Conservative', 'The Globe And Mail', 'The Hill', 'The Hindu', 'The Huffington Post', 'The Irish Times', 'The Jerusalem Post', 'The Lad Bible', 'The Next Web', 'The Sport Bible', 'The Times of India', 'The Verge', 'The Wall Street Journal', 'The Washington Post', 'The Washington Times', 'Time', 'USA Today', 'Vice News', 'Wired', 'Wired.de', 'Wirtschafts Woche', 'Xinhua Net', 'Ynet'];
let sourceName = {"ABC News":"abc-news","ABC News (AU)":"abc-news-au","Aftenposten":"aftenposten","Al Jazeera English":"al-jazeera-english","ANSA.it":"ansa","Argaam":"argaam","Ars Technica":"ars-technica","Ary News":"ary-news","Associated Press":"associated-press","Australian Financial Review":"australian-financial-review","Axios":"axios","BBC News":"bbc-news","BBC Sport":"bbc-sport","Bild":"bild","Blasting News (BR)":"blasting-news-br","Bleacher Report":"bleacher-report","Bloomberg":"bloomberg","Breitbart News":"breitbart-news","Business Insider":"business-insider","Business Insider (UK)":"business-insider-uk","Buzzfeed":"buzzfeed","CBC News":"cbc-news","CBS News":"cbs-news","CNBC":"cnbc","CNN":"cnn","CNN Spanish":"cnn-es","Crypto Coins News":"crypto-coins-news","Der Tagesspiegel":"der-tagesspiegel","Die Zeit":"die-zeit","El Mundo":"el-mundo","Engadget":"engadget","Entertainment Weekly":"entertainment-weekly","ESPN":"espn","ESPN Cric Info":"espn-cric-info","Financial Post":"financial-post","Focus":"focus","Football Italia":"football-italia","Fortune":"fortune","FourFourTwo":"four-four-two","Fox News":"fox-news","Fox Sports":"fox-sports","Globo":"globo","Google News":"google-news","Google News (Argentina)":"google-news-ar","Google News (Australia)":"google-news-au","Google News (Brasil)":"google-news-br","Google News (Canada)":"google-news-ca","Google News (France)":"google-news-fr","Google News (India)":"google-news-in","Google News (Israel)":"google-news-is","Google News (Italy)":"google-news-it","Google News (Russia)":"google-news-ru","Google News (Saudi Arabia)":"google-news-sa","Google News (UK)":"google-news-uk","Göteborgs-Posten":"goteborgs-posten","Gruenderszene":"gruenderszene","Hacker News":"hacker-news","Handelsblatt":"handelsblatt","IGN":"ign","Il Sole 24 Ore":"il-sole-24-ore","Independent":"independent","Infobae":"infobae","InfoMoney":"info-money","La Gaceta":"la-gaceta","La Nacion":"la-nacion","La Repubblica":"la-repubblica","Le Monde":"le-monde","Lenta":"lenta","L'equipe":"lequipe","Les Echos":"les-echos","Libération":"liberation","Marca":"marca","Mashable":"mashable","Medical News Today":"medical-news-today","MSNBC":"msnbc","MTV News":"mtv-news","MTV News (UK)":"mtv-news-uk","National Geographic":"national-geographic","National Review":"national-review","NBC News":"nbc-news","News24":"news24","New Scientist":"new-scientist","News.com.au":"news-com-au","Newsweek":"newsweek","New York Magazine":"new-york-magazine","Next Big Future":"next-big-future","NFL News":"nfl-news","NHL News":"nhl-news","NRK":"nrk","Politico":"politico","Polygon":"polygon","RBC":"rbc","Recode":"recode","Reddit /r/all":"reddit-r-all","Reuters":"reuters","RT":"rt","RTE":"rte","RTL Nieuws":"rtl-nieuws","SABQ":"sabq","Spiegel Online":"spiegel-online","Svenska Dagbladet":"svenska-dagbladet","T3n":"t3n","TalkSport":"talksport","TechCrunch":"techcrunch","TechCrunch (CN)":"techcrunch-cn","TechRadar":"techradar","The American Conservative":"the-american-conservative","The Globe And Mail":"the-globe-and-mail","The Hill":"the-hill","The Hindu":"the-hindu","The Huffington Post":"the-huffington-post","The Irish Times":"the-irish-times","The Jerusalem Post":"the-jerusalem-post","The Lad Bible":"the-lad-bible","The Next Web":"the-next-web","The Sport Bible":"the-sport-bible","The Times of India":"the-times-of-india","The Verge":"the-verge","The Wall Street Journal":"the-wall-street-journal","The Washington Post":"the-washington-post","The Washington Times":"the-washington-times","Time":"time","USA Today":"usa-today","Vice News":"vice-news","Wired":"wired","Wired.de":"wired-de","Wirtschafts Woche":"wirtschafts-woche","Xinhua Net":"xinhua-net","Ynet":"ynet"}
let jsonCountData = '{"United Arab Emirates (the)":"AE","Argentina":"AR","Austria":"AT","Australia":"AU","Belgium":"BE","Bulgaria":"BG","Brazil":"BR","Canada":"CA","Switzerland":"CH","China":"CN","Colombia":"CO","Cuba":"CU","Czechia":"CZ","Germany":"DE","Egypt":"EG","France":"FR","United Kingdom of Great Britain and Northern Ireland (the)":"GB","Greece":"GR","Hong Kong":"HK","Hungary":"HU","Indonesia":"ID","Ireland":"IE","Israel":"IL","India":"IN","Italy":"IT","Japan":"JP","Korea (the Republic of)":"KR","Lithuania":"LT","Latvia":"LV","Morocco":"MA","Mexico":"MX","Malaysia":"MY","Nigeria":"NG","Netherlands (the)":"NL","Norway":"NO","New Zealand":"NZ","Philippines (the)":"PH","Poland":"PL","Portugal":"PT","Romania":"RO","Serbia":"RS","Russian Federation (the)":"RU","Saudi Arabia":"SA","Sweden":"SE","Singapore":"SG","Slovenia":"SI","Slovakia":"SK","Thailand":"TH","Turkey":"TR","Taiwan (Province of China)":"TW","Ukraine":"UA","United States of America (the)":"US","Venezuela (Bolivarian Republic of)":"VE","South Africa":"ZA"}'
let countryData = JSON.parse(jsonCountData);
let categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']




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
//so both checkboxes cant be selecte
let everythingCheck = document.getElementById('everything');
everythingCheck.addEventListener('change', function(){
    headlinesCheck.checked = false;
});
let headlinesCheck = document.getElementById('top-headlines');
headlinesCheck.addEventListener('change', function() {
    everythingCheck.checked = false;
});
headlinesCheck.checked = true;


//event listener so that both sources and country can be selected at the same time
let countryS = document.getElementById('country');
let sourceS = document.getElementById('source');

countryS.addEventListener('change', function(){
    sourceS.options.selectedIndex = 0;
});
sourceS.addEventListener('change', function(){
    countryS.options.selectedIndex = 0;
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
    
    //sources 
    let sourceApi = '';
    let sourceSelect = document.getElementById('source');
    if(sourceSelect.options[sourceSelect.selectedIndex].text == 'All'){
        sourceApi = '';
    } else {
        sourceApi = `sources=${sourceName[sourceSelect.options[sourceSelect.selectedIndex].text]}&`;
    }

    let url = `${baseUrl}${endpoint}${countryApi}${sourceApi}${query}${apiKey}`;
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
        newHead.innerHTML = `${articleArr[i].title} -- ${articleArr[i].publishedAt}`;
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

