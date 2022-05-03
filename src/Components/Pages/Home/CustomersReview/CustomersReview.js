import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faBuildingLock,
  faPhoneFlip,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./CustomerReview.css";

const CustomersReview = () => {
  return (
    <>
      <h1 className="text-center my-2">Our Lucky Customers</h1>
      <p className="text-center text-gray">
        Visit our shop to see amazing creations from our designers
      </p>
      <section className="gradient-custom">
        <Carousel>
          <Carousel.Item interval={3000}>
            <div className="d-flex justify-content-center py-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle shadow-1"
                alt="avatar"
                width="150"
                height="150"
                style={{ marginBottom: "10rem" }}
              />
              <Carousel.Caption className="mt-5">
                <h4 className="">Maria Developer</h4>
                <p className="">
                  <i class="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquam amet animi blanditiis consequatur debitis dicta
                  distinctio, enim error eum iste libero modi nam natus
                  perferendis possimus quasi sint sit tempora voluptatem. Est,
                  exercitationem id ipsa ipsum laboriosam perferendis.
                  <i class="fas fa-quote-right ps-2"></i>
                </p>
                <ul class="list-unstyled d-flex justify-content-center mb-0">
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                </ul>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="d-flex justify-content-center py-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle shadow-1"
                alt="avatar"
                width="150"
                height="150"
                style={{ marginBottom: "10rem" }}
              />
              <Carousel.Caption className="mt-5">
                <h4 className="">Micheal - Web Developer</h4>
                <p className="">
                  <i class="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquam amet animi blanditiis consequatur debitis dicta
                  distinctio, enim error eum iste libero modi nam natus
                  perferendis possimus quasi sint sit tempora voluptatem. Est,
                  exercitationem id ipsa ipsum laboriosam perferendis.
                  <i class="fas fa-quote-right ps-2"></i>
                </p>
                <ul class="list-unstyled d-flex justify-content-center mb-0">
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </li>
                </ul>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="d-flex justify-content-center py-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle shadow-1"
                alt="avatar"
                width="150"
                height="150"
                style={{ marginBottom: "10rem" }}
              />
              <Carousel.Caption className="mt-5">
                <h4 className="">Maria Smantha - Web Developer</h4>
                <p className="">
                  <i class="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquam amet animi blanditiis consequatur debitis dicta
                  distinctio, enim error eum iste libero modi nam natus
                  perferendis possimus quasi sint sit tempora voluptatem. Est,
                  exercitationem id ipsa ipsum laboriosam perferendis.
                  <i class="fas fa-quote-right ps-2"></i>
                </p>
                <ul class="list-unstyled d-flex justify-content-center mb-0">
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li>
                    <i class="fas fa-star-half-alt fa-sm text-warning"></i>
                  </li>
                </ul>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="row my-5 py-5">
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-evenly">
            <FontAwesomeIcon icon={faTruckArrowRight} className="fs-1" />
            <div>
              <h5>Free Shipping Orders $60+</h5>
              <p>A delivery service you can depend on</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-evenly">
            <FontAwesomeIcon icon={faPhoneFlip} className="fs-1" />
            <div>
              <h5>Customer Support</h5>
              <p>Satisfied customers are our best ads</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="d-flex align-items-center justify-content-evenly">
            <FontAwesomeIcon icon={faBuildingLock} className="fs-1" />
            <div>
          <h5>100% Secure Payments</h5>
          <p>The highest level of security</p>
        </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default CustomersReview;
