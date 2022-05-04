import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:4000/inventory/${id}`)
      .then((res) => setSingleProduct(res.data));
  }, [id, singleProduct]);
  const handleDelivered = () => {
    const updateQuantity = singleProduct?.quantity - 1;
    const sentData = {updateQuantity};
    // send update data to the server
    fetch(`http://localhost:4000/inventory/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sentData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8">
          <div className="justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={singleProduct?.image}
                          className="w-100"
                          alt="logo"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{singleProduct?.name}</h5>
                      <span>Id {singleProduct?._id}</span>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <span>Stock {singleProduct?.quantity}</span>
                      </div>
                      <div className="mt-1 mb-0 small">
                        <p className="my-1 text-truncate">
                          Supplier : {singleProduct?.supplier_name}
                        </p>
                      </div>
                      <div className="mb-2 small">
                        <span>{singleProduct?.description}</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${singleProduct?.price}</h4>
                        <span className="text-danger">
                          <s>$720.99</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          onClick={handleDelivered}
                        >
                          Delivered
                        </button>
                        <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h2>for form</h2>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
