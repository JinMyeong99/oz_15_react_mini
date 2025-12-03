import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">My Movies</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
      </div>
    </nav>
  );
}
