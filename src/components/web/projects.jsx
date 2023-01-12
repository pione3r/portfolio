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
                아닌지 사진 업로드만으로 쉽게 판독할 수 있는 서비스입니다.
                <br /> <br />
                <strong>사용한 기술</strong> : <strong>React.js</strong>를 통해
                UI / UX를 구현하고, <strong>Redux</strong>를 통해 state 관리를
                했습니다.
                <br /> <br />
                <div>
                  <strong>역할 및 결과</strong> :
                  <div className="p-2">
                    - 로그인 / 로그아웃 및 회원가입 기능을 구현했습니다. 백엔드
                    API를 연결하여 받은 JWT 토큰을 Redux를 사용해서 전역적으로
                    저장 및 접근하여 효율적으로 관리했습니다.
                  </div>
                  <div className="p-2">
                    - 이미지 업로드, 어종 데이터 fetch 등 프로젝트 전체 기능에
                    대한 백엔드 API 연결을 담당했습니다.
                  </div>
                  <div className="p-2">
                    - 뷰포트를 사용해서 반응형 페이지를 구현했습니다.
                  </div>
                  <div className="p-2">
                    - AWS EC2를 사용해서 프로젝트를 배포했습니다.
                  </div>
                </div>
                <br /> <br />
                <strong>소감</strong> : 처음으로 프론트엔드 개발을 경험한
                프로젝트로, 컴포넌트 구현 / 백엔드 API 연결 등 프론트엔드단
                개발의 기초적인 흐름을 배울 수 있었습니다. 또, 직접 사용할 수
                있는 UI를 처음 만들어 본 경험으로 프론트엔드 엔지니어로의 꿈을
                가지는 계기가 되었습니다.
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
                <strong>사용한 기술</strong> : SEO를 위해
                <strong>Next.js</strong>로 UI / UX를 구현하고, 지겨운 보일러
                플레이트 코드에서 벗어나기 위해 <strong>Zustand</strong>를 통해
                state 관리를 했습니다.
                <br />
                <br />
                <strong>역할 및 결과</strong> :
                <div className="p-2">
                  - three.js를 사용한 3D 지구본 컴포넌트 구현
                </div>
                <div className="p-2">- 편지지 선택 carousel 컴포넌트 구현</div>
                <div className="p-2">
                  - 편지지 선택, 메일 작성, 추가 정보 작성 등. 편지를 보내는
                  전반적인 flow 구현 담당
                </div>
                <div className="p-2">- AWS EC2를 사용한 프로젝트를 배포</div>
                <br /> <br />
                <strong>소감</strong> : 학교 동기들과 팀을 꾸려 설계부터 디자인,
                구현, 배포까지 전부 경험했습니다. 스프린트마다 회의와 회고를
                통해 부족한 점을 보완해 나가는 방식으로 진행했고, 협업과
                커뮤니케이션의 중요성을 깨달은 프로젝트입니다. 기술적으로는
                기존의 CSR과 SSG와 SSR의 렌더링 방식에 따라 발생하는 사용자
                경험의 차이를 확인했습니다.
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
