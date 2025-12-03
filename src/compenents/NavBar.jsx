import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">영화 목록</Link>
      </div>

      <div>
        <Link to="/">홈</Link>
        <Link to="/details">상세 페이지</Link>
      </div>
    </nav>
  );
}
