export default function Main({setPageLocationOffset}) {
  const aboutMeLocation = document.getElementById("about-me-web")?.offsetTop || 0;

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
        <div className="main-title text-white text-6xl blink">안녕하세요.</div>
        <div className="main-arrow-down-button w-12 h-12 bounce" onClick={onMoveToAboutMe}>
          <img src="/main-arrow-down.svg" alt="" />
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
            animation: blink-effect 5s ease-in-out infinite;
          }

          .bounce {
            animation: bounce-effect 1s ease-in-out infinite;
          }

          .main-arrow-down-button {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
