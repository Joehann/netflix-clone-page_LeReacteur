const Movie = (props) => {
  return (
    <div className="movie-image">
      <img src={props.image} />;
    </div>
  );
};

export default Movie;
