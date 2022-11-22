export default function MainMobile({ setPageLocationOffset }) {
  const aboutMeLocation =
    document.getElementById("about-me-mobile")?.offsetTop || 500;

  const onMoveToAboutMe = () => {
    window.scrollTo({ left: 0, top: aboutMeLocation, behavior: "smooth" });
    setPageLocationOffset(aboutMeLocation);
  };

  return (
    <>
      <div
        id="main-web"
        className="main-container w-screen h-screen text-slate-400 bg-slate-900 flex flex-col gap-20 justify-center items-center"
      >
        <div className="main-title text-white text-6xl blink"></div>

        <div
          className="main-arrow-down-button w-fit h-fit bounce"
          onClick={onMoveToAboutMe}
        >
          <img src="/main-arrow-down.svg" width={48} height={48} alt="" />
        </div>
      </div>
      <style jsx="true">
        {`
          @keyframes blink-effect {
            50% {
              opacity: 0;
            }
          }

          @keyframes bounce-effect {
            50% {
              transform: translateY(5px);
            }
          }

          .blink {
            animation: blink-effect 4s ease-in-out infinite;
          }

          .bounce {
            animation: bounce-effect 1s ease-in-out infinite;
          }

          .main-arrow-down-button {
            cursor: pointer;
          }

          .main-title::before {
            content: "안녕하세요";
            animation: animate 8s ease-in-out infinite;
          }

          @keyframes animate {
            50% {
              content: "Hello World!";
            }
          }
        `}
      </style>
    </>
  );
}
