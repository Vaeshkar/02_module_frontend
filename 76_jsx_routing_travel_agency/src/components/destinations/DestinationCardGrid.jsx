const DestinationCardGrid = ({ destinations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {destinations.map((destination) => (
        <div key={destination.id} className="card">
          <h2 className="card-title">{destination.name}</h2>
          <p className="card-description">{destination.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DestinationCardGrid;
