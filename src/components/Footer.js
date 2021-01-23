import React, { useState, useContext } from "react";

/* Contexts */
import { DataContext } from "../contexts/DataContext";
import { ThemeContext } from "../contexts/ThemeContext";

/* Translation */
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { copyright, company, contact, developer } = useContext(DataContext);
  const { darkMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <footer className={darkMode ? "dark-mode" : ""} role="contentinfo">
      <address className="footer-contacts">
        {contact.map((link) => (
          <a href={link.path} title={link.name} key={link.id} target="blank">
            <i className={link.icon}></i>
          </a>
        ))}
      </address>
      <small className="copyright">
        &copy;{copyright.start} - {new Date().getFullYear()} {company.name}
      </small>
      <small className="developer">
        Tillverkad & översätt av{" "}
        <span>
          <a
            href={developer.website}
            title={developer.description}
            target="blank"
          >
            {developer.firstName} {developer.lastName}
          </a>
        </span>
      </small>
    </footer>
  );
};

export default Footer;
