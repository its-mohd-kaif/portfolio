import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import kaif from "../assets/kaif.png";
import { useEffect } from "react";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import Typed from "typed.js";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 300,
      easing: "ease-in-sine",
    });
  }, []);
  const typedRef = useRef(null);

  
  useEffect(() => {
    // Initialize the Typed.js instance after the component mounts
    const options = {
      strings: ['Mohd Kaif'],
      typeSpeed: 120,
      showCursor: false, // Hide the cursor after typing is completed
    };

    const typed = new Typed(typedRef.current, options);

    // Clear the Typed instance after one second
    const timer = setTimeout(() => {
      // typed.destroy();
    }, 1000);

    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div id="home" className="outer-container">
      <div class="custom-flex">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="column1-Home"
        >
          <p>
            Hello, <span style={{ color: "#01BE96" }}>I am</span>
          </p>
          <h1 ref={typedRef} style={{ color: "#01BE96" }}></h1>
          <h4>Frontend Developer</h4>

          <p className="lead fs-6 fw-lighter">
            Experienced frontend developer with a focus on{" "}
            <span className="fw-bold" style={{ color: "#01BE96" }}>
              React
            </span>
            ,{" "}
            <span className="fw-bold" style={{ color: "#01BE96" }}>
              Redux
            </span>
            ,
            <span className="fw-bold" style={{ color: "#01BE96" }}>
              TypeScript
            </span>
            , and{" "}
            <span className="fw-bold" style={{ color: "#01BE96" }}>
              Bootstrap
            </span>
            . Proficient in crafting seamless user experiences and contributing
            to projects driving business growth through targeted social media
            ads. Eager to collaborate on innovative projects, striving to
            deliver high-quality solutions.
          </p>
          <p className="lead fs-6 fw-lighter">
            Seeking opportunities to leverage my expertise and contribute to the
            success of your company. Let's work together to achieve exceptional
            results and create impactful web experiences.
          </p>
          <br></br>
          <Button href="#contact" className="lets-talk-btn">
            Let's Talk
          </Button>
          <br></br>
          <br></br>
          <div class="d-flex align-items-center">
            <p className="lead fs-6 fw-lighter mt-3 me-3">Check out my</p>
            <button
              onClick={() => {
                window.open("https://github.com/The-Kaif", "_blank");
              }}
              class="glow-on-hover me-3"
              type="button"
            >
              <AiFillGithub size={25} className="icon" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/mohd-kaif-01/",
                  "_blank"
                );
              }}
              class="glow-on-hover"
              type="button"
            >
              <AiFillLinkedin size={25} className="icon" />
            </button>
          </div>
          <br></br>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="column2-Home rounded-circle d-inline-block image-container"
        >
          <img
            src={kaif}
            alt="Kaif"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
