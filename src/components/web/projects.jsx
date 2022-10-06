export default function Projects() {
  return (
    <>
      <section
        id="projects-web"
        className="w-screen h-fit bg-zinc-700 flex flex-col gap-20 justify-center items-center pb-28"
      >
        <div className="about-me-title w-fit h-fit text-5xl text-white mt-28 font-bold">
          PROJECTS
        </div>
        <div className="flex flex-col gap-20">
          <div className="project-item-container flex flex-col items-center">
            <div className="project-image-fishy"></div>
            <hr />
            <div className="project-body flex gap-5">
              <div className="project-body-title w-fit h-fit flex flex-col gap-3">
                <div className="w-fit h-fit whitespace-nowrap text-bold font-bold text-2xl">
                  유해 어종을 <br /> 분류하는 웹 서비스
                </div>
                <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white rounded-md px-1.5">
                  <a href="https://github.com/2022SVBootcamp-Team-I/FishyFish">
                    깃허브 보러가기
                  </a>
                </div>
              </div>
              <div className="text-bold text-md w-fit h-fit">
                낚시를 하고 해가되는 어종인지 아닌지 사진 업로드만으로 쉽게
                판독할 수 있는 서비스입니다. <br /> <br />
                <strong>React.js</strong>를 통해 UI / UX를 구현하고, <strong>Redux / toolkit</strong>을 통해 state
                관리를 했습니다.
              </div>
            </div>
          </div>
          <div className="project-item-container slow-letter flex flex-col items-center">
            <div className="project-image-slow"></div>
            <hr />
            <div className="project-body flex gap-5">
              <div className="project-body-title w-fit h-fit flex flex-col gap-3">
                <div className="w-fit h-fit whitespace-nowrap text-bold font-bold text-2xl">
                  실제 편지처럼
                  <br /> 보낼 수 있는 메일 서비스
                </div>
                <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white rounded-md px-1.5">
                  <a href="https://github.com/SLOW-LETTER">깃허브 보러가기</a>
                </div>
              </div>
              <div className="text-bold text-md w-fit h-fit">
                실시간 메신저가 등장하기 전, 밤새 펜팔 답장을 기다려보신 추억을
                잊지못하고 계신가요? 그럼 이 서비스를 통해 추억을 다시
                되살려보세요! <br />
                <br /> 사용자는 웹에서 보내는 편지를 실제 손편지처럼 주고받게
                되는 경험을 통해 예전의 감성을 다시 느낄 수 있습니다.
                <br /> <br /> SEO를 위해 <strong>Next.js</strong>로 UI / UX를 구현하고, 지겨운
                보일러 플레이트 코드에서 벗어나기 위해 <strong>Zustand</strong>를 통해 state
                관리를 했습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx="true">
        {`
          .project-item-container {
            width: 50rem;
            height: fit-content;
            background-color: white;
            border-radius: 20px;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .project-image-fishy {
            width: 48rem;
            height: 25rem;
            background-image: url("/fishFishy.png");
            background-size: cover;
          }
          .project-image-slow {
            width: 48rem;
            height: 25rem;
            background-image: url("/slowLetter.png");
            background-size: cover;
          }
          .project-body {
            width: 100%;
            height: 20%;
            padding-top: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
}
