import { Link } from "react-router";
import parisImg from "../images/paris.jpg";
import tokyoImg from "../images/tokyo.jpg";

const destinations = [
  { slug: "paris", name: "Paris", image: parisImg },
  { slug: "tokyo", name: "Tokyo", image: tokyoImg },
];

const Destinations = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {destinations.map(dest => (
      <Link to={`/destinations/${dest.slug}`} key={dest.slug} className="card w-full bg-base-100 shadow-xl">
        <figure className="aspect-video overflow-hidden">
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{dest.name}</h2>
        </div>
      </Link>
    ))}
  </div>
);

export default Destinations;