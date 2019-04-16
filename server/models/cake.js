var mongoose= require('mongoose');

var RatingSchema = new mongoose.Schema({
    stars: {type: Number},
    comment: {type: String, default: ""},
},{timestamps: {createdAt:"created_at", updatedAt:"updated_at"}});

var CakeSchema = new mongoose.Schema({
    url: { type: String},
    baker: {type:String},
    avgRating: {type:Number},
    ratings: [RatingSchema]
    },{timestamps: {createdAt:"created_at", updatedAt:"updated_at"}}); 

mongoose.model('Cake', CakeSchema);
mongoose.model('Rating', RatingSchema);

