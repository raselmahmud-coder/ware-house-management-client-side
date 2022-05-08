import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../API/AxiosPrivate";
import auth from "../../../firebase.init";
import Spinner from "../../Common/Spinner/Spinner";

const MyOrder = () => {
  const [user, loading, error] = useAuthState(auth);
  const [items, setItems] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      try {
        await axiosPrivate
          .get(`https://king-furniture.herokuapp.com/order?email=${email}`)
          .then((res) => setItems(res.data));
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          toast.error(`${error.message}`);
          console.log(error);
          // signOut(auth);
          // navigate("/getStart");
        }
      }
    };
    getItems();
  }, [user?.email, items, navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    );
  }
  if (error) {
    toast.error(`error occurred ${error}`, {
      id: "user",
    });
  }
  // order delete confirmation
  const handleConfirm = (id) => {
    handleClose();
    try {
      axios
        .delete(`https://king-furniture.herokuapp.com/manageInventory/${id}`)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Deleted this Item", {
              id: "delete-item",
            });
          }
        });
    } catch (error) {
      toast.error(`error happen ${error}`);
    }
  };
  const handleDeleteItem = () => {
    handleShow();
  };

  return (
    <>
      <section className="my-3">
        <h1 className="text-center">My Order {items.length} </h1>
        <div className="px-4 px-lg-5 mt-5">
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-3">
            {items.map((pd) => {
              return (
                <div className="col mb-5" key={pd._id}>
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
                        onClick={() => handleConfirm(pd._id)}
                      >
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
                          onClick={() => handleDeleteItem()}
                        >
                          Delete
                        </button>
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

export default MyOrder;
