// Carousel.js

import React, { useEffect, useState } from "react";
import "./CardSlider.css"; // Replace 'Carousel.css' with the actual path to your CSS file
import reviews from "./reviews"; // Assuming the 'reviews' array is in a separate file
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Aos from "aos";

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
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 300,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div
      style={{
        background: "#191923",
        marginTop: "3em",
      }}
      id="projects"
      className="outer-container"
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
            data-aos="fade-right"
          >
            <p className="testimonial__name me-1">
              {reviews[currentItem].name}
            </p>
            <div style={{ marginTop: "0.3em" }}>
              <FiExternalLink size={22} />
            </div>
          </a>
          <p data-aos="fade-left" className="lead fs-6 fw-lighter testimonial__text">
            {reviews[currentItem].text}
          </p>
        </blockquote>
        <button
          className="carousel__btn carousel__btn--left me-5"
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
