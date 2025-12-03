import { useState } from "react";
import movieListData from "./data/movieListData.json";
import "./App.css";
import ContentCard from "./compenents/ContentCard";

function App() {
  const [movies] = useState(movieListData.results);
  return (
    <div>
      <h1>영화 목록</h1>
      {movies.map((movie) => (
        <ContentCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          posterPath={movie.poster_path}
        />
      ))}
    </div>
  );
}

export default App;
