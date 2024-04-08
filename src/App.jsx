import { useState } from "react";

import Home from "@/components/sections/Home";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Contact from "@/components/sections/Contact";

import Header from "@/components/Header";
import MobileNav from "./components/MobileNav";

import { useEffect } from "react";

import "./App.css";

function App() {
    useEffect(() => {
        document.title = "Zonayed Rahman";
    }, []);

    return (
        <div className="App relative">
            <Header />
            <MobileNav />

            <div className="h-auto" id="home">
                <Home />
            </div>

            <div className="h-auto" id="about-me">
                <AboutMe />
            </div>

            <div className="h-auto" id="projects">
                <Projects />
            </div>

            <div className="h-auto" id="contact">
                <Contact />
            </div>

            {/* <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<div>Home</div>} exact />

                    <Route path="/about-me" element={<div>About Me</div>} />

                    <Route path="/projects" element={<div>Projects</div>} />

                    <Route path="/contact" element={<div>Contact</div>} />
                </Routes>
            </Router> */}
        </div>
    );
}

export default App;
