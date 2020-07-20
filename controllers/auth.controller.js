const db = require('../db');

module.exports = {
    login : function(req, res){
        res.render('auth/login');
    },
    postLogin: function(req, res){
        let email = req.body.email;
        let password = req.body.password;
        let user = db.get('users').find({email: email}).value();
        if(!user){
            res.render('auth/login', { 
                errors: ['User is not exist'],
                values: req.body
            });
            return;
        }
        if(user.password !== password){
            res.render('auth/login', { 
                errors: ['Password was wrong'],
                values: req.body
            });
            return;
        }
        res.cookie('userId', user.id);
        res.redirect('/users');
    }

}