import React from "react";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";

/* Resources */
import axel from "../../images/axel.jpg";

const About = ({ owner, i18n }) => {
  return (
    <section className="about-us">
      <a id="about" className="anchor" href=" ">
        {" "}
      </a>
      <Slide bottom cascade>
        <h2 className="section-title">{i18n.t("about-us.title")}</h2>
      </Slide>
      <article className="section-content">
        <div className="owner">
          <img src={axel} alt={owner.title} title={owner.name} />
          <div className="name-field">
            <div className="blob">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path
                  d="M35.9,-28.6C50.9,-30.2,70.4,-23,73.4,-12C76.5,-1,63,13.8,51.4,25.6C39.7,37.5,29.9,46.4,19.7,47.1C9.4,47.9,-1.3,40.4,-11.6,35.2C-22,30,-32,27.1,-41.3,19.7C-50.5,12.2,-59.1,0.1,-58.4,-11.5C-57.7,-23.1,-47.9,-34.2,-36.6,-33.3C-25.4,-32.4,-12.7,-19.4,-1.1,-18.1C10.4,-16.8,20.9,-27,35.9,-28.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <p className="underlined">{owner.name}</p>
            <small>{owner.title}</small>
            <small>{owner.email}</small>
          </div>
        </div>

        <div className="description">
          <LightSpeed right>
            <p>{i18n.t("about-us.paragraph-1")}</p>
            <p>{i18n.t("about-us.paragraph-2")}</p>
          </LightSpeed>
        </div>
      </article>
    </section>
  );
};

export default About;
