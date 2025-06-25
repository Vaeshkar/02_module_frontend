import { useParams } from "react-router";
import parisImg from "../images/paris.jpg";
import tokyoImg from "../images/tokyo.jpg";

const destinations = {
  paris: { name: "Paris", description: "The city of lights.", image: parisImg },
  tokyo: { name: "Tokyo", description: "The heart of Japan.", image: tokyoImg },
};

const DestinationDetail = () => {
  const { slug } = useParams();
  const dest = destinations[slug];
  if (!dest) return <div>Destination not found.</div>;
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">{dest.name}</h1>
      <img
        src={dest.image}
        alt={dest.name}
        className="w-full max-w-3xl rounded-lg shadow-lg mb-6 object-cover aspect-video"
      />
      <p className="text-lg">{dest.description}</p>
    </div>
  );
};

export default DestinationDetail;