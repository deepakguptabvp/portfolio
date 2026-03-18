import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
};

export default Home;
