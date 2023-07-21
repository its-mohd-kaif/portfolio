import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
function Footer() {
  const phoneNumber = "+918318155149";
  const emailAddress = "kaifmohamman5990@gmail.com";

  const handlePhoneClick = () => {
    // Implement your logic to open the dial pad here
    const phoneLink = `tel:${phoneNumber}`;
    window.open(phoneLink, "_self");
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
      id="contact"
    >
      <div className="d-flex justify-content-between">
        <div style={{ width: "50%" }} className="column1">
          <h2>Contact</h2>
          <h5 className="fw-normal">Address:</h5>
          <p className="lead fs-6 fw-lighter testimonial__text">
            117/658 D Ambedkar Nagar, Kakadeo,{" "}
            <aside> Kanpur, UP, India.</aside>
          </p>
          <h5 className="fw-normal mt-3">Contact me directly:</h5>
          <div className="logo-container">
            <a
              href={`tel:${phoneNumber}`}
              className="logo-link d-flex lead fs-6 fw-lighter testimonial__text"
              onClick={handlePhoneClick}
            >
              <BiPhoneCall size={18} className="logo-icon" />
              <p className="ms-2">{phoneNumber}</p>
            </a>
          </div>
          <div style={{ marginTop: "-1em" }} className="email-container">
            <a href={`mailto:${emailAddress}`} className="email-link d-flex lead fs-6 fw-lighter testimonial__text">
              <p className="logo-icon">
                <HiOutlineMailOpen size={18} />
              </p>
              <p className="ms-2">{emailAddress}</p>
            </a>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <h2 className="fw-normal">Profiles</h2>
          <div class="d-flex align-items-center">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
