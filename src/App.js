import React, { useState, useEffect } from "react";
import "./styles/app.scss";

/* Components */
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

/* Translate */
import i18n from "./i18n/i18n"; // Translating content
import Loading from "./components/Others/Loading";

/* Contexts */
import { DataProvider } from "./contexts/DataContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);

  // Executes when the component has finished rendering
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  if (loading) return <Loading />;
  else
    return (
      <>
        <ThemeProvider>
          <DataProvider>
            <Header />
            <Main />
            <Footer />
          </DataProvider>
        </ThemeProvider>
      </>
    );
}

export default App;
