import React, { useState, useEffect, useContext } from "react";

/* Components */
import Nav from "./Header/Nav";

/* Contexts */
import { DataContext } from "../contexts/DataContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { logo, languages, navLinks } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Nav
        logo={logo}
        languages={languages}
        links={navLinks}
        i18n={(t, i18n)}
      />
    </>
  );
};

export default Header;
