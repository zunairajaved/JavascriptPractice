const { check } = require('express-validator/check');
exports.validate = () => {
       return [ 
          check('title', 'Title is required').exists(),
         ]   
      
    }