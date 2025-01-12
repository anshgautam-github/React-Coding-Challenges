import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const User = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        //  console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err.message));
  };

    useEffect(()=>{
      getProducts();
    },[])

  return (
    <>
      <button
        onClick={getProducts}
        className="px-3 py-2 bg-orange-500 mt-4 rounded-sm text-white text-sm"
      >
        Get Products
      </button>
      <hr />
      <ul>
        {products.length > 0
          ? products.map((item, index) => (
              <li key={index} className="rounded p-5 mb-2 bg-orange-300">
                Product Name: {item.title}
              </li>
            ))
          : "Loading....!!"}
      </ul>
    </>
  );
};

export default User;
