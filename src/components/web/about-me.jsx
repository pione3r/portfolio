export default function AboutMe() {
  return (
    <>
      <section id="about-me" className="about-me-conteiner w-screen h-screen bg-white flex flex-col items-center gap-10">
        <div className="about-me-title w-fit h-fit text-5xl mt-28 font-bold">
          ABOUT ME
        </div>
        <div className="about-me-subtitle text-2xl font-thin">
          더 깊이 탐험하는 개발자입니다.
        </div>
        <div className="about-me-container w-1/2 h-fit flex flex-row gap-10">
          <div className="about-me-img-container">
            <img src="/me.png" width="256" height="256" alt="" />
          </div>
          <div className="about-me-info-container w-fit h-fit flex flex-col gap-10">
            <div className="about-me-name">
              <div className="name-title flex items-center gap-3">
                <div>
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-semibold">이름</div>
              </div>
              <div className="text-xl font-normal mt-2 pl-11">용준현</div>
            </div>
            <div className="about-me-birth">
              <div className="birth-title flex items-center gap-3">
                <div>
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-semibold">생년월일</div>
              </div>
              <div className="text-xl font-normal mt-2 pl-11">96.06.26</div>
            </div>
            <div className="about-me-email">
              <div className="email-title flex items-center gap-3">
                <div>
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-semibold">이메일</div>
              </div>
              <div className="text-xl font-normal mt-2 pl-11">
                dev2diver@gmail
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
