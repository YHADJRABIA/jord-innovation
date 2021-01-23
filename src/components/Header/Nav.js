import React, { useContext } from "react";

/* Contexts */
import { ThemeContext } from "../../contexts/ThemeContext";

const Nav = ({ logo, languages, links, i18n }) => {
  // Theme toggler
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  /*-- Language toggler --*/

  const changeLanguage = (ln) => {
    return () => i18n.changeLanguage(ln);
  };

  return (
    <nav className={darkMode ? "dark-mode" : ""} role="navigation">
      <div className="nav-logo">
        <span>{logo.top}</span>
        <p> {logo.bottom} </p>
      </div>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.path} title={link.name}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="flags">
        {languages.map((lang) => (
          <img
            className="flag"
            onClick={changeLanguage(lang.code)}
            src={`https://flagcdn.com/w40/${lang.flag}.png`}
            srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
            width="40"
            alt={lang.name}
            title={lang.name}
            key={lang.id}
          ></img>
        ))}
      </div>

      <div className="theme-toggler">
        <input
          checked={!darkMode}
          onChange={() => toggleDarkMode((prevMode) => !prevMode)}
          id="dark-mode"
          className="dark-mode-checkbox"
          type="checkbox"
        />
        <label className="dark-mode-label" htmlFor="dark-mode">
          <i className="fas">🕯</i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
    </nav>
  );
};

export default Nav;
