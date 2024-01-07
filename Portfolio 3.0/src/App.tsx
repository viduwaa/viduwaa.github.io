import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { SiteContext } from "./helpers/SiteContext";
import { scroller } from "react-scroll/modules";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
    const scrollToSection = (sectionId: string) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };
    return (
        <>
            <BrowserRouter>
                <SiteContext.Provider value={{ scrollToSection }}>
                    <Navbar />
                    <Home />
                    <About />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer />
                </SiteContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
