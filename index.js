require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const mongoose = require("mongoose");
const Movie = require("./utils/methods");
// const { number } = require("yargs");

(async () => {
// Below connects to mongoose
mongoose.connect(process.env.MONGO_URI); 


if(argv.add) {
    const movie = new Movie({title: argv.title, genre: argv.genre, actor: argv.actor, rating: argv.rating});
    await movie.save();
    console.log(movie);
// node index.js --add --name "Jimbob" -- age 5
} else if (argv.findOne) {
    const foundMovie = await Movie.findOne({title: argv.title});
    console.log(foundMovie);
// node index.js --findOne --title "V for Vendetta"
} else if (argv.deleteOne) {
    const deletedMovie = await Movie.deleteOne({title: argv.title});
    console.log(deletedMovie);
// node index.js --deleteOne --title "The Truman Show" 
} else if (argv.update) {
    console.log(argv.title)
    const updateMovie = await Movie.updateOne(
    { title: argv.title },
    { title: argv.title, rating: argv.rating},
    );
    console.log(updateMovie);

mongoose.connection.close();
}})();
// Above closes the connection to mongoose