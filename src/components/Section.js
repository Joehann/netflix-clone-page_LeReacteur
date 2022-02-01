import Movie from "./Movie";
const Section = (props) => {
  const { category, images } = props.data;
  return (
    <div className="category-container">
      <h2>{category}</h2>
      <div className="movies">
        {images.map((image, index) => {
          return <Movie key={index} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Section;
