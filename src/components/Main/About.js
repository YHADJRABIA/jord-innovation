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
