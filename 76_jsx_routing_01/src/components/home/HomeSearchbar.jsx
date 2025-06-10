import { useNavigate } from "react-router";

const HomeSearchbar = () => {
  const navigate = useNavigate();
  return (
    <>
        <h1 className="text-4xl font-bold mb-4">Find Your Next Adventure</h1>
        <div className="flex gap-2">
            <input type="text" placeholder="Origin" className="input input-bordered" />
            <input type="text" placeholder="Destination" className="input input-bordered" />
            <input type="date" className="input input-bordered" />
            <button className="btn btn-primary" onClick={() => navigate("/destinations")}>Search</button>
        </div>
    </>
  );
}
export default HomeSearchbar;