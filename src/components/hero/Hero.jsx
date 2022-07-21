import React, { Component } from "react";

const heroContent = {
  title: "Matrix Internet",
  description: "React Test Project",
  buttonOneText: "View more",
  buttonTwoText: "Contact",
};

const Hero = () => {
  return (
    <div class="matrix_hero--one">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold"> {heroContent.title}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            {heroContent.description}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              {heroContent.buttonOneText}
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              {heroContent.buttonTwoText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
