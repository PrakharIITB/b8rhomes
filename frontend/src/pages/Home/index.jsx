import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SearchBar from "./SearchBar";
import PropertyGrid from "./PropertyGrid";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <PropertyGrid />
    </div>
  );
};

export default Home;
