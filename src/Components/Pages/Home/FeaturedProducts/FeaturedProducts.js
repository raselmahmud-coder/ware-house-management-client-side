import React from "react";
import useInventories from "../../../../Hooks/useInventories";
import Spinner from "../../../Common/Spinner/Spinner";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [featuredProduct] = useInventories();

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <h1 className="text-center">Featured Products</h1>
        <div className="container py-5">
          <div className="row">
            {featuredProduct ? (
              featuredProduct?.slice(5, 8)?.map((pd) => {
                return (
                  <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={pd._id}>
                    <div className="card">
                      <div className="d-flex justify-content-between p-3">
                        <p className="lead mb-0">Today's Combo Offer</p>
                        <div
                          className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                          style={{ width: "35px", height: "35px" }}
                        >
                          <p className="text-white mb-0 small">x4</p>
                        </div>
                      </div>
                      {pd?.image ? (
                        <img
                          src={pd?.image}
                          className="card-img-top"
                          alt="product"
                        />
                      ) : (
                        <Spinner />
                      )}
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <p className="small">
                            <a href="#!" className="text-muted">
                              Products
                            </a>
                          </p>
                          <p className="small text-danger">
                            <s>$1099</s>
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">{pd?.name}</h5>
                          <h5 className="text-dark mb-0">${pd?.price}</h5>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                          <p className="text-muted mb-0">
                            Available:{" "}
                            <span className="fw-bold">{pd?.quantity}</span>
                          </p>
                          <div className="ms-auto text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
