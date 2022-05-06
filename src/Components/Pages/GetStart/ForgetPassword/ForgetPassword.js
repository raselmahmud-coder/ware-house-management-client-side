import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../../firebase_init";
import Spinner from "../../../Common/Spinner/Spinner";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    if (error) {
      toast.error(`Error getting ${error}`, {
        id: "got-error",
      });
    }
    toast.success("Sent a link to your Email", {
      id: "done",
    });
    e.target.reset();
  };
  return (
    <>
      <Form className="w-25 mx-auto my-5" onSubmit={handleForgetPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {sending ? <Spinner /> : "Submit"}
        </Button>
      </Form>
    </>
  );
};

export default ForgetPassword;
