const postController = require('../controllers/postController');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/posts', postController.create);
  app.get('/api/posts', postController.getAll);
  app.get('/api/posts/:postId', postController.getSingle);
  app.put('/api/posts/:postId', postController.postUpdate);
  app.delete('/api/posts/:postId', postController.postDelete);
};