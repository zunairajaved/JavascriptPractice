const Post = require('../models').Post;
const { validationResult } = require('express-validator/check');

module.exports = {
    create(req, res){
            const errors = validationResult(req);
            console.log(errors);
            if(!errors.isEmpty()){
                res.status(422).json({errors:errors.array()});  
            }  
        Post.create({
            title:req.body.title,
        }).then(post => res.status(200).send(post))
        .catch(error => res.status(400).send(error));
    },
    getAll(req,res,next){
        Post.findAll(req.query)
        .then((posts) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(posts);
        }, (err) => next(err))
        .catch((err) => next(err));
    },
    getSingle(req,res,next){
        Post.findByPk(req.params.postId)
        .then((post) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(post);
        }, (err) => next(err))
        .catch((err) => next(err));
    },
    postUpdate(req,res,next){
        Post.update( {
            title:req.body.title
        },{where:
        {
            id:req.params.postId
        }},{new:true})
        .then((post) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(post);
        }, (err) => next(err))
        .catch((err) => next(err));
    },
    postDelete(req,res,next){
        Post.destroy({where:{id:req.params.postId}}, {
        })
        .then((post) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json('Post deleted succesfully');
        }, (err) => next(err))
        .catch((err) => next(err));
    }
}