// Carousel.js

import React, { useState } from "react";
import "./CardSlider.css"; // Replace 'Carousel.css' with the actual path to your CSS file
import reviews from "./reviews"; // Assuming the 'reviews' array is in a separate file
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const CardSlider = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleNext = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div
      style={{
        marginLeft: "3em",
        marginRight: "3em",
        padding: "1em",
        background: "#191923",
        marginTop: "3em",
      }}
      id="projects"
    >
      <p>
        My <span style={{ color: "#01BE96" }}>projects</span>
      </p>
      <h1>Recent Projects</h1>
      <div className="carousel">
        {/* Wrap the carousel content inside an anchor tag */}

        <div className="carousel__img-container">
          <img
            src={reviews[currentItem].img}
            alt=""
            className="carousel__image"
          />
        </div>
        <blockquote className="testimonial">
          <a
            href={reviews[currentItem].url}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-center link"
          >
            <p className="testimonial__name me-1">
              {reviews[currentItem].name}
            </p>
            <div style={{ marginTop: "0.3em" }}>
              <FiExternalLink size={22} />
            </div>
          </a>
          <p className="lead fs-6 fw-lighter testimonial__text">
            {reviews[currentItem].text}
          </p>
        </blockquote>
        <button
          className="carousel__btn carousel__btn--left"
          onClick={handlePrev}
        >
          <AiFillCaretLeft /> {/* Use the react-icons component */}
        </button>
        <button
          className="carousel__btn carousel__btn--right"
          onClick={handleNext}
        >
          <AiFillCaretRight /> {/* Use the react-icons component */}
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
