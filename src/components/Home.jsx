import React from "react";
import { Button } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import kaif from "../assets/kaif.png";
function Home() {
  return (
    <div id="home" style={{ marginLeft: "3em", marginRight: "3em" ,padding:"1em"}}>
      <div class="d-flex justify-content-between">
        <div style={{ width: "70%" }} className="column1">
          <p>
            Hello, <span style={{ color: "#01BE96" }}>I am</span>
          </p>
          <h1 style={{ color: "#01BE96" }}>Mohd Kaif</h1>
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
          <Button href="#contact" className="lets-talk-btn">Let's Talk</Button>
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
          className="column2 rounded-circle d-inline-block image-container"
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "#01BE96",
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.3s ease", // Add the transition for the transform effect
          }}
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
