import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Main from "./Main.js";
//import data from '../data';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return Main(products);
}
export default HomeScreen;
