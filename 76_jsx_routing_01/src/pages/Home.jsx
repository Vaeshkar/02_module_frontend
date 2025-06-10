import { useNavigate } from "react-router";
import { HomeFeatures, HomeSignup, HomeStats } from "../components/home";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold mb-4">Find Your Next Adventure</h1>
      <div className="flex gap-2">
        <input type="text" placeholder="Origin" className="input input-bordered" />
        <input type="text" placeholder="Destination" className="input input-bordered" />
        <input type="date" className="input input-bordered" />
        <button className="btn btn-primary" onClick={() => navigate("/destinations")}>Search</button>
      </div>
      <HomeFeatures />
      <HomeStats />
      <HomeSignup />
    </div>
  );
};
export default Home;