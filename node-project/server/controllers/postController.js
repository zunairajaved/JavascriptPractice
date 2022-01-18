const Post = require('../models').Post;

module.exports = {
    create(req, res){
        return Post.create({
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
        Post.findByPk(req.params.postId, {
        })
        .then((post) => {
            post.update({
                title:req.body.title,
            },{new:true}).then((nPost)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(nPost);
            },(err)=>next(err))
            .catch((err)=>next(err));
        }, (err) => next(err))
        .catch((err) => next(err));
    },
    postDelete(req,res,next){
        Post.findByPk(req.params.postId, {
        })
        .then((post) => {
            post.destroy().then((resp)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json('Post deleted succesfully');
            },(err)=>next(err))
            .catch((err)=>next(err));
        }, (err) => next(err))
        .catch((err) => next(err));
    }
}