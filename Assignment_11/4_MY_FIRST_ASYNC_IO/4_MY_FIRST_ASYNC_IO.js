var fs = require('fs');
var filepath = process.argv[2];

fs.readFile(filepath,function callback(err,data){
  if(err) {return err}

  var str = data.toString();
  var arry = str.split('\n');
  var len = arry.length-1;
  console.log(len);
})
