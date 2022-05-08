import React from "react";

const AboutUs = () => {
  return (
    <>
      <h1>Our Story</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 my-5">
        <div>
          <img
            src="https://static.wixstatic.com/media/d63528_1c48dd2a3cef428390342a179c574302~mv2.jpg/v1/fill/w_771,h_579,fp_0.50_0.50,q_90,enc_auto/d63528_1c48dd2a3cef428390342a179c574302~mv2.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div>
          <h4 className="text-center mt-5">Adding a Touch of Black</h4>
          <div className="d-flex align-items-center">
            <span>
              We believe that great design should be available to everyone. The
              design features a fusion of unique styles that inspire us from
              mid-century modern to contemporary. We take inspiration from
              design, trends and our environment and inspire our customers in
              turn. We are very passionate about what we do and we believe that
              everyone can live beautifully as furniture should be
              honestly-priced and made available to everyone.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
