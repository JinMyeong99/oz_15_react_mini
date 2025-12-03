const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

export default function ContentCard({ title, rating, posterPath }) {
  const imageUrl = imgBaseUrl + posterPath;

  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>평점: {rating}</p>
    </div>
  );
}
