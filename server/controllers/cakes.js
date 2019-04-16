var mongoose = require("mongoose");
var Cake = mongoose.model("Cake");
var Rating = mongoose.model("Rating");

module.exports={
   index: function(req, res){
    Cake.find({}, function (err, cakes){
        if(err){
            console.log(err);
        }
        else{
            res.json({message:"Success", data: cakes})
        }
    })
   },

   addCake : function(req, res){
        Cake.create({baker : req.body.baker, url : req.body.url, ratings : []}, function(err, cake){
            if (err){
                console.log("Something went wrong: "+ err);
            }
            else{
                res.json({message : "Success", added: true});
            }
        })
    },

    addRating: function(req, res){
        console.log(req.body)
        Rating.create({stars: req.body.stars, comment: req.body.comment}, function(err, newRating){
            console.log(req.body)
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                Cake.findOneAndUpdate({_id: req.params.cakeId}, {$push: {ratings: newRating}}, function(err, data){
                    if(err){
                        res.json({message: "Error!", error: err});
                    }
                    else{
                        res.json({message: "Success!", added: true});
                    }
                })
            }
        })
    },
    
    details: function(req, res){
        Cake.find({ _id: id }, function (err, cake) {
            if (err) {
                console.log(err);
                res.json({ message: "Error", error: err });
            } else {
                res.json(cake);
            }
        })
    }
   
}

  

   
