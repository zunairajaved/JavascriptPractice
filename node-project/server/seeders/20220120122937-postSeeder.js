'use strict';
// const csv = require('csv-parser');
const fs = require('fs');
var csv = require('csv');
const Post = require('../models').Post;
const posts = [];

module.exports = {
  async up (queryInterface, Sequelize) {
    var input = fs.createReadStream(`${__dirname}/data.csv`);
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
    Post.create(resultObject).then(function(){
      console.log('record created');
    })
    .catch(function (err){
      console.log('Error'+ err);
    })
    // queryInterface.bulkInsert('Posts',resultObject, {});
  });
    input.pipe(parser).pipe(transform)
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
