import { useEffect, useState } from "react";
import Main from "./components/web/main";
import NavigationBarMobile from "./components/mobile/header-mobile";
import AboutMeMobile from "./components/mobile/about-me-mobile";
import SkillsMobile from "./components/mobile/skills-mobile";
import ProjectsMobile from "./components/mobile/projects-mobile";
import NavigationBar from "./components/web/header";
import AboutMe from "./components/web/about-me";
import Skills from "./components/web/skills";
import Projects from "./components/web/projects";

export default function App() {
  const [pageLocationOffset, setPageLocationOffset] = useState(0);

  const onWheel = (event) => {
    setPageLocationOffset(event.view.pageYOffset);
  };
  const onTouchMove = (event) => {
    setPageLocationOffset(event.view.pageYOffset);
  };

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="page-container" onWheel={onWheel} onTouchMove={onTouchMove}>
      {matches && (
        <>
          <NavigationBar
            pageLocationOffset={pageLocationOffset}
            setPageLocationOffset={setPageLocationOffset}
          />
          <Main />
          <AboutMe />
          <Skills />
          <Projects />
        </>
      )}
      {!matches && (
        <>
          <NavigationBarMobile
            pageLocationOffset={pageLocationOffset}
            setPageLocationOffset={setPageLocationOffset}
          />
          <Main />
          <AboutMeMobile />
          <SkillsMobile />
          <ProjectsMobile />
        </>
      )}
    </div>
  );
}
