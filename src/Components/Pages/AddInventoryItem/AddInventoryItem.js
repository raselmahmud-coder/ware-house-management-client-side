import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase.init";

const AddInventoryItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (e) => {
    e.preventDefault();
    const email = user?.email;
    const name = e.target.productName.value;
    const supplier_name = e.target.supplierName.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const image = e.target.url.value;
    const description = e.target.description.value;
    const addItem = {
      email,
      name,
      supplier_name,
      price,
      quantity,
      image,
      description,
    };
    axios
      .post(`https://warehouse-server-raselmahmud22.koyeb.app/add-item`, { addItem })
        .then((res) => {
            if (res.status === 200) {
                console.log(res.status)
                toast.success("Item is added", {
                    id:'item-added'
                })
            }
        });
         
    e.target.reset();
  };
  return (
    <>
      <h2 className="text-center text-uppercase my-4"> add inventory item</h2>
      <form className="w-50 mx-auto" onSubmit={handleAddItem}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="email"
            className="form-control"
            value={user?.email}
            disabled
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="productName"
            className="form-control"
            placeholder="Product Name"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="supplierName"
            className="form-control"
            placeholder="Supplier Name"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="number"
            id="price"
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="number"
            id="quantity"
            className="form-control"
            placeholder="Quantity"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="url"
            id="url"
            placeholder="give an image url"
            className="form-control"
          />
         
        </div>
        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="short description"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add Item
        </button>
      </form>
    </>
  );
};

export default AddInventoryItem;
