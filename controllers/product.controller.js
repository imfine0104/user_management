const db = require('../db');

module.exports = {
    index : function(req, res){
        let page = parseInt(req.query.page) || 1;
        let perPage = 8;
        let drop = (page-1)*perPage;
        
        res.render('products/index', {
            products: db.get('products').drop(drop).take(perPage).value()
        });
    },
    search : function(req, res){
        let q = req.query.q;
        let matchedUser = db.get('products').value().filter(function(user){
            return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
        res.render('products/index', {
            products: matchedProduct,
            q: req.query.q
        });
    }
} 