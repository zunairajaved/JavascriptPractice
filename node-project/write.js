// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: 'out.csv',
//   header: [
//     {id: 'title', title: 'Title'},
//     {id: 'description', title: 'Description'}
//   ]
// });

// const data = [
//   {
//     title: 'seeding from csv',
//     description:'some testing posts'
//   }, {
//     title: 'new post',
//     description:'some testing posts'
//   }, {
//     title: 'testing post',
//     description:'some testing posts'
//   }
// ];
// csvWriter
//   .writeRecords(data)
//   .then(()=> console.log('The CSV file was written successfully'));
const fs = require('fs');
var csv = require('csv');
const posts = [];
var input = fs.createReadStream('data.csv');
	var parser = csv.parse({
		delimiter: ',',
		columns: true
	});

  var transform = csv.transform(function(row){
    var resultObject={
      title: row.Title,
      description:row.Description,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    console.log(resultObject);
    // .then(function(){
    //   console.log('record created');
    // })
    // .catch(function (err){
    //   console.log('Error'+ err);
    // })
    // queryInterface.bulkInsert('Posts',resultObject, {});
  });
    input.pipe(parser).pipe(transform)
