import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:4000/inventory/${id}`)
        .then(res => setSingleProduct(res.data))
    },[id])
  return (
    <>
          <h1>this is product details {singleProduct.name}</h1>

    </>
  );
};

export default ProductDetails;
