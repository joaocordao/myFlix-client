import PropType from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.director.Name}</Card.Text>
                <Button
                    onClick={() => {
                        onMovieClick(movie)
                    }} variant="link">
                    Open
                </Button>
            </Card.Body>
        </Card>
    );
};
MovieCard.propTypes = {
    movie: PropType.shape({
        title: PropType.string.isRequired,
        image: PropType.string.isRequired,
    }).isRequired
};
  
/*      
      <div
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.title}
      </div>
    );
  };
*/