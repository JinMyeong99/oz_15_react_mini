import { Link } from "react-router-dom";

export default function ContentCard({ title, rating, posterPath }) {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
  const imageUrl = imgBaseUrl + posterPath;

  return (
    <Link to="/details" className="rounded-md bg-neutral-800 overflow-hidden">
      <img src={imageUrl} className="w-full h-[470px] object-cover" />
      <div className="p-2 space-y-1">
        <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
        <p className="text-slate-300">평점: {rating}</p>
      </div>
    </Link>
  );
}
