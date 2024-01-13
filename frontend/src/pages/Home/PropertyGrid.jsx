import { useEffect, useState } from "react";
import axios from "axios";
import PropertyTile from "../../components/propertyTile";
import BeatLoader from "react-spinners/BeatLoader";

const PropertyGrid = () => {
  const [properties, setProperties] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {};

  useEffect(() => {
    axios
      .get("http://localhost:3001/property")
      .then((res) => {
        setProperties(res.data);
        console.log(properties);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return isLoading ? (
    <div className="w-full text-center mt-4">
    <BeatLoader
    loading={isLoading}
    color="#0d6efd"
    size={15}
  />
  </div>
  ) : (
    <div className="grid grid-cols-4 gap-6 p-6">
      {properties.length !== 0 && properties.map((property, index) => {
        return(
        <PropertyTile location={property.location} owner={property.owner} price={property.price} rating={property.rating} index={index} _id={property._id}/>
      )})}
    </div>
  );
};

export default PropertyGrid;
