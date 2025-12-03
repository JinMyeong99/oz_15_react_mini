import { useState } from "react";
import movieListData from "./data/movieListData.json";
import "./App.css";
import ContentCard from "./compenents/ContentCard";

function App() {
  const [movies] = useState(movieListData.results);

  return (
    <div className="w-screen h-auto bg-neutral-600 pb-20">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl text-white font-bold pt-15 pb-4">영화 목록</h1>
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <ContentCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
