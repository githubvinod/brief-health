const Parsing = require('./modules/data-parsing');
const util = require('util');
var fs = require('fs');
const postFolder = __dirname+'/../content/post/';
const line_Reader = require('line-reader');
Parsing.dataParsingYear().then(function (res) {
    UpdateMdFile(res,'year');
})
.then(function(){
    Parsing.dataParsingMonth().then(function (res) {
        UpdateMdFile(res,'month');
    });
})
.then(function(){
    Parsing.dataParsingDay().then(function (res) {
        UpdateMdFile(res,'day');
    });
});
function UpdateMdFile(res,period){
    path = require('path'),
    fs.readdirSync(postFolder).forEach(file => {
        var myData = '';
        var hasView = false;
        file = path.join(postFolder, file);      
        const readFile = new Promise((resolve, reject) => {
            fs.readFile(file, 'utf8', function(err, contents) {
                return resolve(contents);
            });    
        });

        const readLine = new Promise((resolve, reject) => {
            line_Reader.eachLine(file, function (line, last) {

                if (line.indexOf(period+'view') < 0) {
                    myData += line + " \n";
                }
                if (line.indexOf('slug:') > -1) {
                    slug = line.replace('slug:', '');
                    slug = slug.trim();
            
                    if (typeof res[slug] !== 'undefined') {
                        views = res[slug]['pageviews'];
                        myData += period+"view : " + views + " \n";
                        hasView = true;
                    }
                }
                if (hasView) {
                    if (last) {
                        resolve(myData);             
                    }
                }
                
            });
        });
        const writeFile = 
        function(fData) {
        return new Promise((resolve, reject) => {
            console.log('file',file);
            fs.writeFile(file, fData, function (err) {
                if (err) {
                    reject(err);
                }
                resolve(file);
                // console.log(file);
                // console.log(fData);
            });    
        });
    }

        readFile.then(function(data){
            readLine.then(function(fileData){
                writeFile(fileData).then(function(filePath){

                }).catch(error => {
                    console.log('WriteFile',error.message);
                });
                
            }).catch(error => {
                console.log('ReadLine',error.message);
            });
        }).catch(error => {
            console.log('RaeadFile',error.message);
        });
    });
}
