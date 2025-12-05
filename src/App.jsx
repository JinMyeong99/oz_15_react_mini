import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGenre } from "./RTK/genre/genreThunk";

function App() {
  const dispatch = useDispatch();
  const genreStatus = useSelector((state) => state.genre.status);

  useEffect(() => {
    if (genreStatus === "idle") {
      dispatch(fetchGenre());
    }
  }, [genreStatus, dispatch]);

  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      {!hideNavbar && <Navbar />}
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
