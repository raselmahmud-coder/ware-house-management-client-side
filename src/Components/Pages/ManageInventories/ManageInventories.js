import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useInventories from "../../../Hooks/useInventories";
import Spinner from "../../Common/Spinner/Spinner";

const ManageInventory = () => {
  const [inventories] = useInventories();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleDeleteItem = () => {
    handleShow();
  };
  const handleAddItem = () => {
    navigate("/add-inventory-item");
  };
  const handleConfirmation = (id) => {
    handleClose();
    axios
      .delete(`https://king-furniture.herokuapp.com/manageInventory/${id}`)
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success(`you were delete ${id}`, {
            id: "deleting",
          });
        }
      });
  };
  return (
    <>
      <section className="my-3">
        <h1 className="text-center">Manage Inventories </h1>
        <div className="px-4 px-lg-5 mt-5">
          {inventories.length === 0 && (
            <div className="d-flex justify-content-center">
              <Spinner></Spinner>
            </div>
          )}
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-3">
            {inventories.map((pd) => {
              return (
                <div className="col mb-5" key={pd._id}>
                  <div className="card h-100">
                    <img className="card-img-top" src={pd?.image} alt="..." />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{pd?.name}</h5>
                        <small>
                          {pd?.description?.slice(0, 35)}
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
                        <button
                          className="btn btn-outline-danger ms-1"
                          onClick={handleDeleteItem}
                        >
                          Delete
                        </button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Are you want to delete?</Modal.Title>
                          </Modal.Header>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Cancel
                            </Button>
                            <Button
                              variant="primary"
                              onClick={() => handleConfirmation(pd._id)}
                            >
                              Confirm
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button onClick={handleAddItem} className="btn btn-primary">
            Add Item
          </button>
        </div>
      </section>
    </>
  );
};

export default ManageInventory;
