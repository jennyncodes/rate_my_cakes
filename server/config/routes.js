
var cakes = require('../controllers/cakes');

module.exports = function(app){

    app.get('/cakes', function(req, res){
        cakes.index(req, res);
    })
    app.post('/cakes', function(req, res){
        cakes.addCake(req, res);
    })
    app.post('/ratings/:cakeId', function(req, res){
        cakes.addRating(req, res);
    })
    app.get('/cakes/:id', function(req, res){
        cakes.details(req, res);
    })

}

