var fs = require('fs');
var data = require('./data.json');

fs.readFile('./data.json','utf-8', function (err,data) {
    var newData = JSON.parse(data);
    console.log("readFile", data);

    console.log("parseData", newData);
})