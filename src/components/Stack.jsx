import Aos from "aos";
import React, { useEffect } from "react";
import { AiFillCode } from "react-icons/ai";
import { FaPencilRuler, FaTools } from "react-icons/fa";

function Stack() {
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
      }}
      id="stack"
      className="outer-container"
    >
      <p>
        My <span style={{ color: "#01BE96" }}>stack</span>
      </p>
      <h1>What do I Do</h1>
      <br></br>
      <div class="main-stack">
        <div data-aos="fade-down" className="stack-column">
          <div className="d-flex align-items-center justify-content-center">
            <AiFillCode color="#01BE96" size={75} />
          </div>
          <br></br>
          <h4 className="text-center">Frameworks</h4>
          <div className="d-flex align-items-center justify-content-center">
            <p className="lead fs-6 fw-lighter text-center">
              Proficient in React, TypeScript, Redux, Bootstrap, ANTD, MUI. Full
              REST API, Next.js, GraphQL knowledge. Crafting dynamic web
              applications for optimal user experiences.
            </p>
          </div>
        </div>

        <div
          className="stack-column"
          data-aos="fade-up"
        >
          <div className="d-flex align-items-center justify-content-center">
            <FaPencilRuler color="#01BE96" size={65} />
          </div>
          <br></br>
          <h4 className="text-center">Programming Languages</h4>
          <div className="d-flex align-items-center justify-content-center">
            <p className="lead fs-6 fw-lighter text-center">
              Knowledgeable in C++, JavaScript, TypeScript (React, Redux,
              Next.js) for frontend. Versatile in crafting effective solutions
              for diverse projects.
            </p>
          </div>
        </div>

        <div
          className="stack-column"
          data-aos="fade-down"
        >
          <div className="d-flex align-items-center justify-content-center">
            <FaTools color="#01BE96" size={65} />
          </div>
          <br></br>
          <h4 className="text-center">Other Tools</h4>
          <div className="d-flex align-items-center justify-content-center">
            <p className="lead fs-6 fw-lighter text-center">
              Proficient in Git, Webpack, and webhooks for development and
              version control. Strong command of HTML5 and CSS3 for visually
              appealing and responsive web interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
