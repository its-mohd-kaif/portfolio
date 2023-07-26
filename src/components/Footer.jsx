import Aos from "aos";
import React, { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import mapboxgl from "mapbox-gl"; // Make sure you've installed 'mapbox-gl' package
import MapView from "./MapView";

mapboxgl.accessToken =
  "pk.eyJ1IjoibW9oZGthaWYxNSIsImEiOiJjbGp3aXlxOWUwMm15M2tud3R5NXJ3ZHh1In0.2rDw475fje7HJjxTxiT61Q";
function Footer() {
  const phoneNumber = "+918318155149";
  const emailAddress = "kaifmohamman5990@gmail.com";

  const latitude = 26.483391908735697;
  const longitude = 80.29443669197339;

  const homeLocation = [26.483391908735697, 80.29443669197339];

  const handlePhoneClick = () => {
    // Implement your logic to open the dial pad here
    const phoneLink = `tel:${phoneNumber}`;
    window.open(phoneLink, "_self");
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
      id="contact"
      className="outer-container"
    >
      <div className="d-flex justify-content-between">
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="column-footer"
        >
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
              <p style={{ marginTop: "-0.3em" }} className="ms-2">{phoneNumber}</p>
            </a>
          </div>
          <div style={{ marginTop: "-1em" }} className="email-container">
            <a
              href={`mailto:${emailAddress}`}
              className="email-link d-flex lead fs-6 fw-lighter testimonial__text"
            >
              <p className="logo-icon">
                <HiOutlineMailOpen size={18} />
              </p>
              <p className="ms-2">{emailAddress}</p>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="column-footer"
        >
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
        <div
          className="column-footer mt-4"
          style={{ height: "300px", position: "relative" }}
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <MapView latitude={latitude} longitude={longitude} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
