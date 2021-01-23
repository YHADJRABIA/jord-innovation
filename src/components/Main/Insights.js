import React from "react";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Insights = ({ insights, i18n }) => {
  return (
    <section className="insights">
      <a id="insight" className="anchor" href=" ">
        {" "}
      </a>
      <Slide bottom cascade>
        <h2 className="section-title">{i18n.t("insights.title")}</h2>
      </Slide>
      <Fade bottom>
        <article className="section-content">
          {insights.map((insight) => (
            <div className="card" key={insight.id}>
              <div className="card-icon">
                <i className={insight.icon}></i>
                <h3>{insight.title}</h3>
              </div>
              <div className="card-text">
                <h4>{insight.content}</h4>
              </div>
            </div>
          ))}
        </article>
      </Fade>
    </section>
  );
};

export default Insights;
