var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fs = require('fs');

let url = 'http://newsapi.org/v2/sources?apiKey=9b98cfe67cbe4cab821c4d8538986814';


let sourcesArr = {};

makeRequest(url)
    .then(data => {
        let sourcesData = JSON.parse(data);
        for(let i = 0; i<sourcesData.sources.length; i++){
            sourcesArr[sourcesData.sources[i].name] = sourcesData.sources[i].id;
        }
        let writeStream = fs.createWriteStream('./sourcesData.txt');
        writeStream.write(JSON.stringify(sourcesArr));
    })
    .catch(err => console.log(err));

function makeRequest(url){
    let request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        request.onload = function() {
            if(request.status >= 200){
                // console.log(request.responseText);
                resolve(request.responseText);
            } else {
                reject(request.status);
            }
        }
        request.open('GET', url, true);
        request.send();
    });
}