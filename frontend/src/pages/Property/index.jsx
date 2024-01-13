import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Amenities from "./Amenities";
import GoogleMap from "./Map";

const Property = (props) => {
  const id = localStorage.getItem("property_id");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const image = localStorage.getItem("image");

  useEffect(() => {
    axios
      .post(`http://localhost:3001/property/getProperty`, { _id: id })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full py-10 flex justify-center">
          <div id="image">
            <img
              src={`./property/image${image}.jpeg`}
              className="rounded-lg w-[28rem]"
              alt=""
            />
          </div>
          <div id="details">
            {data && (
              <div className="ml-8">
                <h1 className="text-[4rem] font-bold">{data.location}</h1>
                <h1 className="text-[2rem]">Owned by, {data.owner}</h1>
                <h1 className="text-[1.5rem] font-semibold">
                  {data.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h1>
                <Amenities />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[70%] m-auto" id="description">
            <h1 className="font-bold text-3xl">Some important details:</h1>
            <ul className="ml-4 list-disc">
                <li>Number of bedrooms: 3</li>
                <li>Number of bathrooms: 2</li>
                <li>Area: 1500 sqft</li>
                <li>Year built: 2020</li>
                <li>Neighborhood: ABC</li>
                <li>Close to schools, parks, and shopping centers</li>
            </ul>
      </div>

    </div>
  );
};

export default Property;
