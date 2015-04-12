

exports.throwExcel= function(data,res){

console.log('Converting and exporting to Excel');
res.writeHead(200, {'Content-Type': 'application/excel'});
  res.end(data);


}


