class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }

   getPG(movies) {
        // Filter movies with rating "PG"
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie with specified values
const casinoRoyale = new Movie("Harry porter", "Eon Productions", "PG-13");

// Displaying information about the created movie
console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);
