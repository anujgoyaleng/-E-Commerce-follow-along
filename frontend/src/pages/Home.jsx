
import  { useState, useEffect } from "react";
import Product from "../components/auth/Product.jsx";
import NavBar from "../components/auth/nav.jsx";
// import { productData } from "../static/data.js";
import axios from "../axiosConfig";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/v2/product/get-products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(" Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      })
  }, []);

  if(loading){
    return (
      <div className="test-center text-white mt-10">Loading Products...</div>
    )
  }
  if(error){
    return <div className="test-center text-red-500 mt-10">Error: {error}</div>
  }

  return (
    <div className="w-full min-h-screen bg-neutral-800">
      <NavBar />
      <h1 className="text-3xl text-center py-4 p-6 text-white">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}
 