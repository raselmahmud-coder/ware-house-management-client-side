import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
const Footer = () => {
  return (
    <div className="d-md-flex footer-custom justify-content-md-between my-5">
      <div>
        <p>
          &copy;Copyright 2019 - {new Date().getFullYear()} King Furniture
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="rounded-circle p-2 mx-2 icon"/>
        <FontAwesomeIcon icon={faFacebookMessenger} className="rounded-circle p-2 mx-2 icon"/>
        <FontAwesomeIcon icon={faYoutube} className="rounded-circle p-2 mx-2 icon"/>
      </div>
    </div>
  );
};

export default Footer;
