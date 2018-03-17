var fs = require('fs');
var filepath = process.argv[2];

var buff = fs.readFileSync(filepath);
var str = buff.toString();
var arry = str.split('\n');
var len = arry.length-1;
console.log(len);
