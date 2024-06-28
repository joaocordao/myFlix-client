import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
/*    const [movies, setMovies] = useState([
        {
          id: 1,
          title: "Jaws",
          description: "A giant great white shark arrives on the shores of a New England beach resort and wreaks havoc with bloody attacks on swimmers until a part-time sheriff teams up with a marine biologist and an old seafarer to hunt the monster down.",
          genre: "Horror",
          image: "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
          director: "Steven Spielberg"
        },
        {
          id: 2,
          title: "Fight Club",
          description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          genre: "Drama",
          image: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
          director: "David Fincher"
        },
        {
          id: 3,
          title: "Lion",
          description: "A five-year-old Indian boy is adopted by an Australian couple after getting lost hundreds of kilometers from home. 25 years later, he sets out to find his lost family.",
          genre: "Drama",
          image: "https://m.media-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_FMjpg_UX1000_.jpg",
          director: "Garth Davis"
        },
  ]);
*/
  const [movies, setMovies] = useState([]); // empty array

  const [selectedMovie, setSelectedMovie] = useState(null); // To determine whether to render a specific part of the UI

  useEffect(() => {
    fetch("https://myflix-movies80-1cc69a49ddd0.herokuapp.com/movies")
        .then((response) => response.json())
        .then(movies => {
            setMovies(movies)
        })
        .catch(e => console.log(e))

  }, []);


  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  } 
  
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
        }}
        />
      ))}
    </div>
  );
}