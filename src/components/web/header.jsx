export default function NavigationBar({
  pageLocationOffset,
  setPageLocationOffset,
}) {
  const aboutMeLocation =
    document.getElementById("about-me-web")?.offsetTop || 0;
  const skillsLocation = document.getElementById("skills-web")?.offsetTop || 0;
  const projectsLocation =
    document.getElementById("projects-web")?.offsetTop || 0;

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
        className={
          pageLocationOffset >= 0 && pageLocationOffset < skillsLocation
            ? "header-container w-full h-20 flex fixed top-0 bg-slate-900"
            : "header-container w-full h-20 flex fixed top-0"
        }
      >
        <div
          className="header-title w-32 h-12 text-white hover:underline text-2xl pl-10 pt-5 font-bold cursor-pointer"
          onClick={onMoveToMain}
        >
          DevDive
        </div>
        <ul className="header-items-container flex gap-8 items-center absolute top-0 right-0 pt-5">
          <li
            className="w-32 h-12 text-white hover:underline text-xl font-semibold cursor-pointer"
            onClick={onMoveToAboutMe}
          >
            About me
          </li>
          <li
            className="w-32 h-12 text-white hover:underline text-xl font-semibold cursor-pointer"
            onClick={onMoveToSkills}
          >
            Tech Skills
          </li>
          <li
            className="w-32 h-12 text-white hover:underline text-xl font-semibold cursor-pointer"
            onClick={onMoveToProjects}
          >
            Projects
          </li>
        </ul>
      </header>
      <style jsx="true">
        {`
          .header-container {
            transition: all 0.2s ease-out;
          }
        `}
      </style>
    </>
  );
}
