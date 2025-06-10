import { HomeFeatures, HomeSignup, HomeStats, HomeSearchbar } from "../components/home";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <HomeSearchbar />
      <HomeFeatures />
      <HomeStats />
      <HomeSignup />
    </div>
  );
};
export default Home;