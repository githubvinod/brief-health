const Parsing = require('./modules/data-parsing');
const util = require('util');
var fs = require('fs');
var fsw = require('fs');
const testFolder = __dirname+'/../content/post/';
var lineReader = require('readline');
const line_Reader = require('line-reader');
const dir = __dirname;
var async = require('async');
Parsing.dataParsingYear().then(function (res) {
    path = require('path'),
        // console.log('path', __dirname);
    fs.readdirSync(testFolder).forEach(file => {
        // console.log(file);
        var myData = '';
        filePath = '';
        const tasks = [
            function setfilePath(cb) {
                console.log('Filepath');
                filePath = path.join(testFolder, file);        
            },
            function findslug(cb){
                console.log('myData',myData);
                line_Reader.eachLine(filePath, function (line, last) {

                    myData += line + " \n";
                    if (line.indexOf('slug:') > -1) {
                        line = line.replace('slug:', '');
                        line = line.trim();
                
                        if (typeof res[line] !== 'undefined') {
                            views = res[line]['pageviews'];
                            myData += "view : " + views + " \n";
                            
                        }
                    }
                    
                });
            },
            function writeFile(cb){
                fs.writeFile(filePath, myData, function (err) {
                    if (err) throw err;
                    console.log(filePath);
                    console.log(myData);
                });
            }

        ];

        async.series(tasks, (err, results) => {
            if (err) {
                return next(err);
            }
            
            return results;
        });







        // filePath = path.join(testFolder, file);
        // console.log('-------------------------------');
        // line_Reader.eachLine(filePath, function (line, last) {
        //     myData += line + " \n";
        //     if (line.indexOf('slug:') > -1) {
        //         line = line.replace('slug:', '');
        //         line = line.trim();
                
        //         if (typeof res[line] !== 'undefined') {
        //             views = res[line]['pageviews'];
        //             myData += "view : " + views + " \n";
        //             console.log('myData',myData);
        //         }
                
        //     }
            
        //     if (last) {
        //         fs.writeFile(filePath, myData, function (err) {
        //             if (err) throw err;
        //             console.log(filePath);
        //             console.log(myData);
        //         });
        //     }
        // });

    });
});