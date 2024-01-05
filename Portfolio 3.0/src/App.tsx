import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { SiteContext } from "./helpers/SiteContext";
import { scroller } from "react-scroll/modules";
import Projects from "./components/Projects";

function App() {
    const scrollToSection = (sectionId:string) => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
    }
    return (
        <>
            <BrowserRouter>
                <SiteContext.Provider value={{scrollToSection}}>
                    <Navbar />
                    <Home />
                    <About />
                    <Projects/>
                </SiteContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
