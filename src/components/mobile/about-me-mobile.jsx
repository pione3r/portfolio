export default function AboutMeMobile() {
  return (
    <>
      <section
        id="about-me-mobile"
        className="about-me-conteiner w-screen h-fit bg-white flex flex-col items-center gap-5 pb-20"
      >
        <div className="about-me-title w-fit h-fit text-5xl mt-28 font-bold">
          ABOUT ME
        </div>
        <div className="about-me-subtitle text-2xl font-normal text-center leading-10">
          프론트엔드 엔지니어로서 가져야할 가장 중요한 역량 중 하나는
          <br />
          끊임없이 변화하는 개발 생태계에서 개발, 테스팅, 서비스 성능에 <br />
          끊임없이 고민하는 것이라 생각합니다.
          <br />
          <br />
          이를 위해 한 줄의 더 나은 코드를 작성하고,
          <br /> 사용자의 입장에서 더 나은 사용성을 위해,
          <br />더 깊이 탐험하는 프론트엔드 엔지니어입니다.
        </div>
        <div className="about-me-container w-fit h-fit flex flex-col gap-10">
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
          <div className="about-me-info-2-container w-fit h-fit flex flex-col gap-10">
            <div className="about-me-blog">
              <div className="blog-title flex items-center gap-3">
                <div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                </div>
                <div className="text-3xl font-semibold">기술 블로그</div>
              </div>
              <div className="text-xl font-normal mt-2 pl-11">
                <a href="https://velog.io/@dev_diver">
                  https://velog.io/@dev_diver
                </a>
              </div>
            </div>
            <div className="about-me-github">
              <div className="birth-title flex items-center gap-3">
                <div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                </div>
                <div className="text-3xl font-semibold">깃허브</div>
              </div>
              <div className="text-xl font-normal mt-2 pl-11">
                <a href="https://github.com/pione3r">
                  https://github.com/pione3r
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
