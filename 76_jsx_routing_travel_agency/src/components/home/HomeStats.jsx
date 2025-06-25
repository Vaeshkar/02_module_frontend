const HomeStats = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal mt-10 shadow">
        <div className="stat">
            <div className="stat-title">Happy Travelers</div>
            <div className="stat-value">20K+</div>
            <div className="stat-desc">Last 5 years</div>
        </div>
        <div className="stat">
            <div className="stat-title">Destinations</div>
            <div className="stat-value">150+</div>
            <div className="stat-desc">Curated worldwide</div>
        </div>
        <div className="stat">
            <div className="stat-title">Years in Business</div>
            <div className="stat-value">10</div>
            <div className="stat-desc">Greatly improved</div>
        </div>
    </div>
  );
}
export default HomeStats;
