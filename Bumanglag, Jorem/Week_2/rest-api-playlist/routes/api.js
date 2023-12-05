const express = require('express');
const router = express.Router();
const Jorem = require('..//models/jorem.js');

//get the list of jorem from the db
router.get('/jorem',function(req,res,next){
    res.send({type:'GET'});
});


//add a new jorem to the db
router.post('/jorem',function(req,res,next){
    Jorem.create(req.body).then(function(jorem){
        res.send(jorem);
    }).catch(next);
});

//update a jorem in the db
router.put('/jorem/:id',function(req,res,next){
    Jorem.findByIdAndUpdate({_id:req.params.id},re.body).then(function(jorem){
        res.send(jorem);
    });
});

//delete a jorem from the db
router.delete('/jorem/:id',function(req,res,next){
    Jorem.findByIdAndRemove({_id:req.params.id}).then(function(jorem){
        res.send(jorem)
    });
    res.send({type:'DELETE'});
});

module.exports = router;