import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";

export default function MovieDetail() {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  const [movie] = useState(movieDetailData);

  const posterUrl = imgBaseUrl + movie.poster_path;

  const genresText = movie.genres.map((genre) => genre.name).join(", ");

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-600">
      <div className="w-full max-w-4xl bg-neutral-800 rounded-lg p-4 flex gap-4">
        {posterUrl && (
          <div className="w-1/2">
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        )}

        <div className="w-1/2 space-y-3">
          <h1 className="text-3xl font-semibold text-slate-50">
            {movie.title}
          </h1>

          <p className=" text-slate-300">
            <span className="text-xl font-semibold text-yellow-400">
              {movie.vote_average}
            </span>
            <span className="text-sm text-slate-400">
              ({movie.vote_count}명)
            </span>
          </p>

          <p className="text-sm text-slate-300">{genresText}</p>

          <p className="text-white">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
