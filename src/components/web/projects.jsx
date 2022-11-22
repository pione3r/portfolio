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
                  <hr />
                  <div className="w-fit h-fit whitespace-nowrap font-medium text-base">
                    22.7~22.8 (5주) <br />
                    Frontend Engineer
                  </div>
                </div>
                <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white rounded-md px-1.5">
                  <a href="https://github.com/2022SVBootcamp-Team-I/FishyFish">
                    깃허브 보러가기
                  </a>
                </div>
              </div>
              <div className="text-bold text-md w-fit h-fit">
                <strong>서비스 요약</strong> : 낚시를 하고 해가되는 어종인지
                아닌지 사진 업로드만으로 쉽게 판독할 수 있는 서비스입니다.{" "}
                <br /> <br />
                <strong>사용한 기술</strong> : <strong>React.js</strong>를 통해
                UI / UX를 구현하고, <strong>Redux / toolkit</strong>을 통해
                state 관리를 했습니다.
                <br /> <br />
                <strong>역할 및 성과</strong> : 백엔드단에서 받은 API를 연결하여
                로그인 및 회원가입을 구현했습니다. 로그인 후 받은 토큰을 Redux를
                사용해서 전역적으로 저장 및 접근하고, 라우팅 및 사용자의 기능
                사용을 관리했습니다.
                <br /> <br />
                <strong>소감</strong> : 처음으로 프론트엔드 개발을 경험한
                프로젝트입니다. 이번 프로젝트를 통해 컴포넌트들의 렌더링, 라우팅
                방식과 전역적인 state 관리 방식을 이해할 수 있었습니다. 또, 직접
                사용할 수 있는 UI를 처음 만들어 본 경험으로 프론트엔드
                엔지니어로의 꿈을 가지는 계기가 되었습니다.
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
                  <hr />
                  <div className="w-fit h-fit whitespace-nowrap font-medium text-base">
                    22.9~22.10 (8주) <br />
                    Frontend Engineer
                  </div>
                </div>
                <div className="text-bold text-lg w-fit h-fit bg-zinc-700 text-white rounded-md px-1.5">
                  <a href="https://github.com/SLOW-LETTER">깃허브 보러가기</a>
                </div>
              </div>
              <div className="text-bold text-md w-fit h-fit">
                <strong>서비스 요약</strong> : 실시간 메신저가 등장하기 전, 밤새
                펜팔 답장을 기다려보신 추억을 잊지못하고 계신가요? 그럼 이
                서비스를 통해 추억을 다시 되살려보세요! 사용자는 웹에서 보내는
                편지를 실제 손편지처럼 주고받게 되는 경험을 통해 예전의 감성을
                다시 느낄 수 있습니다.
                <br />
                <br />
                <strong>사용한 기술</strong> : SEO를 위해{" "}
                <strong>Next.js</strong>로 UI / UX를 구현하고, 지겨운 보일러
                플레이트 코드에서 벗어나기 위해 <strong>Zustand</strong>를 통해
                state 관리를 했습니다.
                <br />
                <br />
                <strong>역할 및 성과</strong> : three.js를 사용한 3D 지구본
                모델, 템플릿을 선택할 수 있는 carousel 등의 UI 컴포넌트들과 편지
                작성, 보내기 페이지 등을 구현했습니다. 또, getServerSideProps
                같은 라이프사이클 함수로 서버 사이드 렌더링을 하여, 조금 더
                사용자 경험을 향상시켰습니다.
                <br /> <br />
                <strong>소감</strong> : 두 번째로 진행한 이번 프로젝트는 기존의
                CSR 방식을 사용하는 React와 다르게 SSG와 SSR 방식이 메인이 되는
                Next를 사용해서 렌더링 방식에 따라 사용자 경험이 어떻게 달라질
                수 있는지 체감할 수 있었고, 어떤 방식으로 더 나은 사용자 경험을
                만들 수 있는지 경험할 수 있는 기회가 되었습니다.
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
