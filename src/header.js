import React from "react";

const Header = () => {
  return <>
   <header>
   <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Payment Made Easy For You.
              </h1>
              <p className="main-hero-para">
               A Secure and Convenient method of conducting transactions without the need for physical
               contact or the use of traditional payment methods such as cards or cash. 
              </p>
              </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/header.svg"
                alt="heroimg"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </header>
    </>
};

export default Header;
