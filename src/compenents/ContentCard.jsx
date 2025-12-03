const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ title, rating, posterPath }) {
  const imageUrl = imgBaseUrl + posterPath;

  return (
    <div className="movie-card">
      <img className="movie-card__poster" src={imageUrl} alt={title} />
      <h3 className="movie-card__title">{title}</h3>
      <p className="movie-card__rating">평점: {rating}</p>
    </div>
  );
}
