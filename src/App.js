import { useState } from "react";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function App() {
  const [pageLocationOffset, setPageLocationOffset] = useState(0);

  const onMoveToMain = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setPageLocationOffset(0);
  };
  const onMoveToAboutMe = () => {
    window.scrollTo({ left: 0, top: 721, behavior: "smooth" });
    setPageLocationOffset(721);
  };
  const onMoveToSkills = () => {
    window.scrollTo({ left: 0, top: 1442, behavior: "smooth" });
    setPageLocationOffset(1442);
  };

  const onScroll = () => {
    setPageLocationOffset(window.pageYOffset);
  };

  return (
    <div className="page-container" onWheel={onScroll}>
      <div className="main-container w-screen h-screen text-slate-400 bg-slate-900">
        <header
          className={
            pageLocationOffset >= 0 && pageLocationOffset < 1370
              ? "header-container w-full h-20 flex fixed top-0 bg-slate-900"
              : "header-container w-full h-20 flex fixed top-0"
          }
        >
          <div
            className="header-title w-32 h-12 text-white hover:text-gray-700 text-2xl pl-10 pt-5 font-bold"
            onClick={onMoveToMain}
          >
            DevDive
          </div>
          <ul className="header-items-container flex gap-8 items-center absolute top-0 right-0 pt-5">
            <li
              className="w-32 h-12 text-white hover:text-gray-700 text-xl font-semibold"
              onClick={onMoveToAboutMe}
            >
              About me
            </li>
            <li
              className="w-32 h-12 text-white hover:text-gray-700 text-xl font-semibold"
              onClick={onMoveToSkills}
            >
              Tech Skills
            </li>
            <li className="w-32 h-12 text-white hover:text-gray-700 text-xl font-semibold">
              Projects
            </li>
          </ul>
        </header>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <style jsx="true">
        {`
          .header-container {
            transition: all 0.2s ease-out;
          }
        `}
      </style>
    </div>
  );
}
