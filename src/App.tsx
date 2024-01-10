import { HashRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import {  SiteProvider } from "./helpers/SiteContext";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./styles/background.css";
import "./styles/loader.css";
import Background from "./components/customComponents/Background";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 1000);
    return () => clearTimeout(delay); */
    window.onload = () => setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`loader-wrapper  ${
            loading ? "" : "loader-hidden"
          } flex h-dvh w-full items-center justify-center`}
        >
          <span className="loader"></span>
        </div>
      ) : (
        <HashRouter>
          <SiteProvider>
            <>
              <Background />
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </>
          </SiteProvider>
        </HashRouter>
      )}
    </>
  );
}

export default App;
