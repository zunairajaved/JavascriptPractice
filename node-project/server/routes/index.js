const postController = require('../controllers/postController');
const validator = require('../middlewares/validation');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/posts', validator.validate('createPost'), postController.create);
  app.get('/api/posts', postController.getAll);
  app.get('/api/posts/:postId', postController.getSingle);
  app.put('/api/posts/:postId', postController.postUpdate);
  app.delete('/api/posts/:postId', postController.postDelete);
};