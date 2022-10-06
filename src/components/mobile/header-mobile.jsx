import { useState } from "react";

export default function NavigationBarMobile({
  pageLocationOffset,
  setPageLocationOffset,
}) {
  const aboutMeLocation =
    document.getElementById("about-me-mobile")?.offsetTop || 0;
  const skillsLocation = document.getElementById("skills-mobile")?.offsetTop || 0;
  const projectsLocation =
    document.getElementById("projects-mobile")?.offsetTop || 0;
  const [clicked, setClicked] = useState(false);
  const onMoveToMain = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setPageLocationOffset(0);
  };
  const onMoveToAboutMe = () => {
    window.scrollTo({ left: 0, top: aboutMeLocation, behavior: "smooth" });
    setPageLocationOffset(aboutMeLocation);
  };
  const onMoveToSkills = () => {
    window.scrollTo({ left: 0, top: skillsLocation, behavior: "smooth" });
    setPageLocationOffset(skillsLocation);
  };
  const onMoveToProjects = () => {
    window.scrollTo({ left: 0, top: projectsLocation, behavior: "smooth" });
    setPageLocationOffset(projectsLocation);
  };

  return (
    <>
      <header
        className={`header-container w-screen h-20 flex fixed top-0 justify-between items-center ${
          pageLocationOffset >= 0 && pageLocationOffset < skillsLocation
            ? "bg-slate-900"
            : ""
        }`}
      >
        <div
          className="header-title w-fit h-fit text-white hover:text-gray-700 text-2xl font-bold ml-5"
          onClick={onMoveToMain}
        >
          DevDive
        </div>
        <div
          className={`drop-down-button-container mr-5  ${
            clicked ? "" : "flex flex-col w-fit h-fit gap-1"
          }`}
          onClick={() => setClicked((prev) => !prev)}
        >
          {clicked ? (
            <>
              <div className="drop-down-button-clicked-1"></div>
              <div className="drop-down-button-clicked-2"></div>
            </>
          ) : (
            <>
              <div className="drop-down-button"></div>
              <div className="drop-down-button"></div>
              <div className="drop-down-button"></div>
            </>
          )}
        </div>
        {clicked ? (
          <>
            <div
              className={`${
                pageLocationOffset >= 0 && pageLocationOffset < 1460
                  ? "bg-slate-900"
                  : ""
              } drop-down-item-container flex flex-col gap-2`}
            >
              <div className="drop-down-item" onClick={onMoveToAboutMe}>
                ABOUT ME
              </div>
              <div className="drop-down-item" onClick={onMoveToSkills}>
                SKILLS
              </div>
              <div className="drop-down-item" onClick={onMoveToProjects}>
                PROJECTS
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </header>
      <style jsx="true">
        {`
          .header-container {
            transition: all 0.2s ease-out;
          }
          .drop-down-button {
            width: 1.5rem;
            height: 0.2rem;
            background-color: white;
            transition: all 0.2s ease-out;
          }
          .drop-down-button-clicked-1 {
            width: 1.5rem;
            height: 0.2rem;
            background-color: white;
            transform: rotate(45deg) translateY(2px);
            transition: all 0.2s ease-out;
          }
          .drop-down-button-clicked-2 {
            width: 1.5rem;
            height: 0.2rem;
            background-color: white;
            transform: rotate(-45deg) translateY(-2px);
            transition: all 0.2s ease-out;
          }
          .drop-down-item-container {
            width: fit-content;
            height: fit-content;
            color: white;
            position: absolute;
            top: 4rem;
            right: 0;
            padding-left: 1rem;
            padding-bottom: 1rem;
            border-bottom-left-radius: 10px;
          }
          .drop-down-item {
            width: fit-content;
            height: fit-content;
            font-size: 1rem;
            font-weight: 600;
            margin-right: 2rem;
          }
        `}
      </style>
    </>
  );
}
