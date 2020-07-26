const db = require('../db');
const uniqid = require('uniqid');

module.exports = {
    index : function(req, res){

        res.render('users/index', {
            users: db.get('users').value()
        });
    },
    search : function(req, res){
        let q = req.query.q;
        let matchedUser = db.get('users').value().filter(function(user){
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
        res.render('users/index', {
            users: matchedUser,
            q: req.query.q
        });
    },
    getCreate : function(req, res){
        res.render('users/create');
    },
    view : function(req, res){
        let id = req.params.id;
        let user = db.get('users').find({id: id}).value();
        res.render('users/view', {user: user});
    },
    postCreate: function(req, res){       
        let user = {
            id: uniqid(),
            name: req.body.name,
            phone: req.body.phone
        };        
        db.get('users').push(user).write();
        res.redirect('/users');
    }
} 