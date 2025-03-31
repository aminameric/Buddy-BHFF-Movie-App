// Hardcoded movie database
const movies = [
    {
        title: "Inception",
        year: "2010",
        poster: "https://m.media-amazon.com/images/I/51oD5vAO8XL._AC_.jpg",
        plot: "A thief who enters the dreams of others to steal secrets.",
        actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
        rating: "8.8"
    },
    {
        title: "The Dark Knight",
        year: "2008",
        poster: "https://m.media-amazon.com/images/I/71pOa+XEfaL._AC_SY679_.jpg",
        plot: "Batman faces the Joker, a criminal mastermind causing chaos.",
        actors: "Christian Bale, Heath Ledger",
        rating: "9.0"
    },
    {
        title: "Interstellar",
        year: "2014",
        poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
        plot: "A team of explorers travels through a wormhole in space.",
        actors: "Matthew McConaughey, Anne Hathaway",
        rating: "8.6"
    }
];

function searchMovie() {
    console.log("Search button clicked!");
    let movieInput = document.getElementById("movieInput").value.toLowerCase();
    let movieResult = document.getElementById("movieResult");

    if (movieInput.trim() === "") return;

    let movie = movies.find(m => m.title.toLowerCase().includes(movieInput));

    if (movie) {
        movieResult.innerHTML = `
            <div class="movie-card">
                <h2>${movie.title} (${movie.year})</h2>
                <img src="${movie.poster}" alt="Movie Poster">
                <p><strong>Plot:</strong> ${movie.plot}</p>
                <p><strong>Actors:</strong> ${movie.actors}</p>
                <p><strong>IMDB Rating:</strong> ${movie.rating}</p>
            </div>
        `;
    } else {
        movieResult.innerHTML = `<p>Movie not found! Try another title.</p>`;
    }
}
