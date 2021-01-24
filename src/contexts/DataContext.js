import React, { createContext } from "react";
import { useTranslation } from "react-i18next";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

// Holds the data to be provided. To be imported by App.js.
export const DataProvider = (props) => {
  const { i18n } = useTranslation();

  const content = {
    company: { name: "Jord Innovation" },
    logo: { top: "Jord", bottom: "Innovation" },

    owner: {
      name: "Axel Häger",
      email: "axel@jordinnovation.com",
      title: i18n.t("about-us.job-title"),
    },

    languages: [
      { name: i18n.t("languages.en"), code: "en", flag: "gb", id: 1 },
      { name: i18n.t("languages.sv"), code: "sv", flag: "se", id: 2 },
    ],

    contact: [
      {
        name: "E-mail",
        path: "mailto:axel@jordinnovation.com",
        icon: "fa fa-envelope",
        id: 1,
      },
      {
        name: "LinkedIn",
        path: "https://se.linkedin.com/in/axel-h%C3%A4ger-068783153",
        icon: "fab fa-linkedin",
        id: 2,
      },
    ],

    navLinks: [
      { name: i18n.t("navNames.about"), path: "#about", id: 1 },
      { name: i18n.t("navNames.insight"), path: "#insight", id: 2 },
    ],

    // Main

    insights: [
      {
        title: i18n.t("problem.title"),
        content: i18n.t("problem.content"),
        icon: "fas fa-times-circle",
        id: 1,
      },
      {
        title: i18n.t("solution.title"),
        content: i18n.t("solution.content"),
        icon: "fab fa-envira",
        id: 2,
      },
      {
        title: i18n.t("technology.title"),
        content: i18n.t("technology.content"),
        icon: "fas fa-recycle",
        id: 3,
      },
      {
        title: i18n.t("your-choice.title"),
        content: i18n.t("your-choice.content"),
        icon: "fas fa-hands-helping",
        id: 4,
      },
    ],

    // Footer
    copyright: { start: "2019" },

    developer: {
      firstName: "Yacine",
      lastName: "Hadj Rabia",
      website: "https://yhadjrabia.github.io/portfolio/",
      description: i18n.t("developer"),
    },
  };

  /* 
  Passing the data to other components, we could list these components one by one but props.children is more efficient as it auto-selects all
  the children wrapped by <DataProvider> </DataProvider> in App.js.
  Passing navTitles as a value to be consumed by Nav.js
  */
  return (
    <DataContext.Provider value={content}>
      {props.children}
    </DataContext.Provider>
  );
};
