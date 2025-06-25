import paris2Img from "../../images/paris2.jpg";
import tokyo2Img from "../../images/tokyo2.jpg";
import newyorkImg from "../../images/newyork.jpg";

const destinations = [
  { slug: "paris", name: "Paris", image: paris2Img },
  { slug: "tokyo", name: "Tokyo", image: tokyo2Img },
  { slug: "newyork", name: "New York", image: newyorkImg },
];

const HomeFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {destinations.map((dest) => (
          <div className="card bg-base-100 shadow-md min-h-[350px]" key={dest.slug}>
              <figure className="h-48 overflow-hidden"><img className="object-cover w-full h-full" src={dest.image} alt={dest.name} /></figure>
              <div className="card-body">
              <h2 className="card-title">{dest.name}</h2>
              <p className="line-clamp-2">{`Explore the beauty and culture of ${dest.name}.`}</p>
              </div>
          </div>
        ))}
    </div>
  );
}

export default HomeFeatures;