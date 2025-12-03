import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-neutral-800">
      <div className="flex gap-8 items-center w-[90%] py-3 mx-auto">
        <Link to="/" className="text-white">
          홈
        </Link>
        <Link to="/" className="text-white">
          영화 목록
        </Link>
        <Link to="/details" className="text-white">
          상세 페이지
        </Link>
      </div>
    </nav>
  );
}
