import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="container">
      <div>
        <p>
          &copy;Copyright 2019 - {new Date().getFullYear()} All right reserved
          King Furniture
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub}/>
      </div>
    </div>
  );
};

export default Footer;
