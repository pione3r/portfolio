export default function Projects() {
  return (
    <>
      <section className="w-screen h-screen bg-zinc-700 flex flex-col gap-10 justify-center items-center">
        <div className="about-me-title w-fit h-fit text-5xl text-white mt-26 font-bold">
          PROJECTS
        </div>
        <div className="project-items-container flex gap-10">
          <div className="project-item-container fishy flex flex-col">
            <div className="project-image-fishy"></div>
            <div className="project-body flex gap-5">
              <div className="text-bold font-bold text-2xl w-fit h-fit">
                유해 어종을 분류하는 웹 서비스입니다.
              </div>
              <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white rounded-md mt-0.5">
                <a href="https://github.com/2022SVBootcamp-Team-I/FishyFish">
                  보러가기
                </a>
              </div>
            </div>
          </div>
          <div className="project-item-container slow-letter flex flex-col">
            <div className="project-image-slow"></div>
            <div className="project-body flex gap-5">
              <div className="text-bold font-bold text-2xl w-fit h-fit">
                실제 편지처럼 보낼 수 있는 메일 서비스입니다.
              </div>
              <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white rounded-md mt-0.5">
                <a href="https://github.com/SLOW-LETTER">보러가기</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx="true">
        {`
          .project-item-container {
            width: 34rem;
            height: 24rem;
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
            padding-top: 1rem;
            padding-left: 1rem;
          }
        `}
      </style>
    </>
  );
}
