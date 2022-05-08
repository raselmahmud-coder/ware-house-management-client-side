import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../../Hooks/useInventories";
import Spinner from "../../Common/Spinner/Spinner";

const ManageItems = () => {
  const [bestProducts] = useInventories();
  return (
    <>
      <section className="py-5">
        <h1 className="text-center">Manage Products</h1>
        <div className="px-4 px-lg-5 mt-5">
          {bestProducts.length === 0 && (
            <div className="d-flex justify-content-center">
              <Spinner></Spinner>
            </div>
          )}
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-3">
            {bestProducts?.map((pd) => {
              return (
                <div className="col mb-5" key={pd._id}>
                  <div className="card h-100">
                    <img className="card-img-top" src={pd?.image} alt="..." />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{pd?.name}</h5>
                        <small>
                          {pd?.description.slice(0, 35)}
                          <span className="font-weight-bold text-uppercase">
                            ...Read More
                          </span>
                        </small>
                        <p>Price ${pd?.price}</p>
                        <p>Quantity {pd?.quantity}</p>
                        <p>Supplier {pd?.supplier_name}</p>
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Link
                          className="btn btn-outline-dark mt-auto"
                          to={`/productDetails/${pd._id}`}
                        >
                          Manage
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageItems;
