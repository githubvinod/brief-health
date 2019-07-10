module.exports = {
    dataParsing: function dataParsing() {
        return new Promise((resolve, reject) => {
            try {
                var request = require('request')

                var options = {
                    method: 'GET',
                    json: true, // Use,If you are sending JSON data
                    //url: "https://graphql.fhirhunt.com/graphql",
                    url: "http://10.10.10.70:1313/index.json",
                    headers: {
                        "Cache-Control": "no-cache",
                        'Content-Type': 'application/json'
                    },
                }
                request(options, function (err, res, body) {
                    if (err) {
                        console.log(' Body :', body)
                        console.log('Error :', err)
                        return;
                    }
                    resolve(body);

                });
            }
            catch (err) {
                resolve(err);
            }
        });
    },
    dataParsingYear: function dataParsingYear() {
        return new Promise((resolve, reject) => {
            try {
                var request = require('request')

                var options = {
                    method: 'GET',
                    json: true, // Use,If you are sending JSON data
                    //url: "https://graphql.fhirhunt.com/graphql",
                    url: "https://focused-ardinghelli-11292e.netlify.com/year.json",
                    headers: {
                        "Cache-Control": "no-cache",
                        'Content-Type': 'application/json'
                    },
                }
                request(options, function (err, res, body) {
                    if (err) {
                        console.log(' Body :', body)
                        console.log('Error :', err)
                        return;
                    }
                    resolve(body);

                });
            }
            catch (err) {
                resolve(err);
            }
        });
    },
    dataParsingMonth: function dataParsingMonth() {
        return new Promise((resolve, reject) => {
            try {
                var request = require('request')

                var options = {
                    method: 'GET',
                    json: true, // Use,If you are sending JSON data
                    //url: "https://graphql.fhirhunt.com/graphql",
                    url: "https://focused-ardinghelli-11292e.netlify.com/month.json",
                    headers: {
                        "Cache-Control": "no-cache",
                        'Content-Type': 'application/json'
                    },
                }
                request(options, function (err, res, body) {
                    if (err) {
                        console.log(' Body :', body)
                        console.log('Error :', err)
                        return;
                    }
                    resolve(body);

                });
            }
            catch (err) {
                resolve(err);
            }
        });
    },
    dataParsingDay: function dataParsingDay() {
        return new Promise((resolve, reject) => {
            try {
                var request = require('request')

                var options = {
                    method: 'GET',
                    json: true, // Use,If you are sending JSON data
                    //url: "https://graphql.fhirhunt.com/graphql",
                    url: "https://focused-ardinghelli-11292e.netlify.com/day.json",
                    headers: {
                        "Cache-Control": "no-cache",
                        'Content-Type': 'application/json'
                    },
                }
                request(options, function (err, res, body) {
                    if (err) {
                        console.log(' Body :', body)
                        console.log('Error :', err)
                        return;
                    }
                    resolve(body);

                });
            }
            catch (err) {
                resolve(err);
            }
        });
    }
}