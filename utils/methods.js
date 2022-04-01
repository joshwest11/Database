const mongoose = require("mongoose");


const Movie = mongoose.model("Movie" , {
    title: { type: String, unique: true},
    genre: {type: String, unique:false},
    actor: { type: String, unique: false},
    releaseYear: { type: Number, unique: false},
    rating: { type: Number, unique: false}
});

module.exports = Movie;