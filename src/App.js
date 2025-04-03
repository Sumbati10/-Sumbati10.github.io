import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import StarCanvas from "./components/canvas/Stars";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StarCanvas />
          <AnimatePresence>
            <div>
              <Hero name="Lindah Sumbati" profession="Data Scientist" />
              <Wrapper>
                <Skills />
                <Experience
                  jobs={[
                    {
                      title: "Data Scientist",
                      company: "Hello Tractor",
                      duration: "Jan 2024 - Present",
                      responsibilities: [
                        "Built and optimized classifiers using machine learning techniques.",
                        "Enhanced data collection procedures for analytics.",
                        "Implemented NLP techniques to analyze user-generated text.",
                        "Designed cloud-based data pipelines for real-time analytics.",
                      ],
                    },
                    {
                      title: "Data Analyst",
                      company: "Kenya Agricultural and Livestock Research Organization",
                      duration: "2018 - 2020",
                      responsibilities: [
                        "Developed and optimized data collection systems.",
                        "Built Power BI dashboards for data visualization.",
                        "Contributed to research project design and methodology.",
                      ],
                    },
                  ]}
                />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education
                  schools={[
                    { degree: "MSc Financial Engineering", school: "WorldQuant University", year: "Ongoing" },
                    { degree: "BSc Statistics & Programming", school: "Kenyatta University", year: "2016-2020" },
                  ]}
                />
                <Contact email="sumbatilinda@gmail.com" linkedin="https://www.linkedin.com/in/lindahsumbati/" github="https://github.com/Sumbati10" />
              </Wrapper>
              <Footer />

              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
