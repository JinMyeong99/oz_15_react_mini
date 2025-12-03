import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";

export default function MovieDetail() {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  const [movie] = useState(movieDetailData);

  const posterUrl = imgBaseUrl + movie.poster_path;

  const genresText = movie.genres.map((genre) => genre.name).join(", ");

  return (
    <div>
      <div>
        {posterUrl && <img src={posterUrl} alt={movie.title} />}

        <div>
          <h1>{movie.title}</h1>

          <p>
            ⭐ {movie.vote_average} ({movie.vote_count}명)
          </p>

          <p>{genresText}</p>

          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
