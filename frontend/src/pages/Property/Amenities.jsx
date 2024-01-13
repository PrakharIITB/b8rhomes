const Amenities = () => {
  const amenities = ["garage", "pool", "rooms", "garden", "kitchen", "gym"];

  return (
    <div className="rounded-lg w-full border-2 border-slate-500 py-2 mt-4">
      {/* <h1>Amenities</h1> */}
        <div className="grid grid-cols-3 gap-1 ml-10">
          {amenities.map((amenity) => {
            return (
              <div className="flex items-center gap-2">
                <img src={`./amenities/${amenity}.svg`} width={"20px"} alt="" />
                <p>{amenity}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Amenities;
