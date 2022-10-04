export default function ProjectsMobile() {
  return (
    <>
      <section className="w-screen h-screen bg-zinc-700 flex flex-col gap-5 items-center">
        <div className="about-me-title w-fit h-fit text-5xl text-white mt-20 font-bold">
          Projects
        </div>
        <div className="project-item-container fishy flex flex-col">
          <div className="project-image-fishy"></div>
          <div className="project-body flex gap-1">
            <div className="text-bold font-bold text-sm w-fit h-fit">
              유해 어종을 분류하는 웹 서비스입니다.
            </div>
            <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white text-sm rounded-md mt-0.5">
              <a href="https://github.com/2022SVBootcamp-Team-I/FishyFish">
                보러가기
              </a>
            </div>
          </div>
        </div>
        <div className="project-item-container slow-letter flex flex-col">
          <div className="project-image-slow"></div>
          <div className="project-body flex gap-1">
            <div className="text-bold font-bold text-sm w-fit h-fit">
              실제 편지처럼 보낼 수 있는 메일 서비스입니다.
            </div>
            <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white text-sm rounded-md mt-0.5">
              <a href="https://github.com/SLOW-LETTER">보러가기</a>
            </div>
          </div>
        </div>
      </section>
      <style jsx="true">
        {`
          .project-item-container {
            width: 22rem;
            height: 14rem;
            background-color: white;
            border-radius: 20px;
          }
          .project-image-fishy {
            width: 100%;
            height: 80%;
            background-image: url("/fishFishy.png");
            background-size: cover;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          .project-image-slow {
            width: 100%;
            height: 80%;
            background-image: url("/slowLetter.png");
            background-size: cover;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          .project-body {
            width: 100%;
            height: 20%;
            padding-top: 0.5rem;
            padding-left: 1rem;
          }
        `}
      </style>
    </>
  );
}
