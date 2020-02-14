//makes an object of two letter country codes and country names
//writes to file
//used to populate the select field on the news page


let fs = require('fs');


    function getData(){
        return new Promise((resolve, reject) => {
            fs.readFile('./news/countryCodes.txt', 'utf8', (err, data) => {
                if (err) reject(err);
                resolve(data);                  
            });
        });
       
        
    }

let str = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za';
str = str.toUpperCase();
console.log(str);
let availCountries = str.split(' ');
console.log(availCountries.length);

getData()
    .then(data => JSON.parse(data))
    .then(fileData => {
        let newObj = {};
        availCountries.forEach(country => {
            Object.keys(fileData).forEach(key => {
                if(fileData[key]['twoNum'] == country){
                    
                    newObj[key] = country;
                } 
            });
        });
        let writeStream = fs.createWriteStream('./data.txt');
        writeStream.write(JSON.stringify(newObj));
        console.log(newObj);
    })
    .catch(err => console.log(err));



