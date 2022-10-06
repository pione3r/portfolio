export default function Skills() {
  return (
    <>
      <section id="skills-web" className="skills-conteiner w-full h-fit bg-blue-900 flex flex-col items-center gap-10">
        <div className="skills-title w-fit h-fit text-white text-5xl mt-20 font-bold">
          SKILLS
        </div>
        <div className="skills-container w-1/2 h-fit flex justify-center gap-10 mt-10">
          <div className="skills-item-1 skills-item front-end w-fit h-fit bg-white rounded-2xl flex flex-col justify-center gap-10">
            <div
              className="text-center text-3xl font-bold"
              style={{ color: "rgb(29, 78, 216)" }}
            >
              FrontEnd
            </div>
            <div>
              <img src="/html-css-js-logo.png" alt="" />
            </div>
            <div>
              <img src="/typescript-logo.png" alt="" />
            </div>
            <div>
              <img src="/react-logo.png" alt="" />
            </div>
            <div>
              <img src="/redux-logo.png" alt="" />
            </div>
            <div>
              <img src="/zustand-logo.png" alt="" />
            </div>
            <div>
              <img src="/next-js-logo.png" alt="" />
            </div>
            <div>
              <img src="/tailwind-logo.svg" alt="" />
            </div>
            <div>
              <img src="/chakra-logo.png" alt="" />
            </div>
          </div>
          <div className="skills-item-2 flex flex-col gap-10">
            <div className="skills-item database w-fit h-fit bg-white rounded-2xl flex flex-col justify-center gap-10">
              <div
                className="text-center text-3xl font-bold"
                style={{ color: "rgb(29, 78, 216)" }}
              >
                SQL
              </div>
              <div className="">
                <img src="/mysql-logo.png" alt="" />
              </div>
              <div>
                <img src="/mssql-logo.svg" alt="" />
              </div>
              <div>
                <img src="/postgresql-logo.png" alt="" />
              </div>
            </div>
            <div className="skills-item database w-fit h-fit bg-white rounded-2xl flex flex-col justify-center gap-10">
              <div
                className="text-center text-3xl font-bold"
                style={{ color: "rgb(29, 78, 216)" }}
              >
                NoSQL
              </div>
              <div>
                <img src="/mongodb-logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="skills-item-3 flex flex-col gap-10">
            <div className="skills-item ver-control w-fit h-fit bg-white rounded-2xl flex flex-col justify-center gap-10">
              <div
                className="text-center text-3xl font-bold"
                style={{ color: "rgb(29, 78, 216)" }}
              >
                Version Control
              </div>
              <div className="">
                <img src="/git-logo.png" alt="" />
              </div>
              <div>
                <img src="/github-logo.png" alt="" />
              </div>
            </div>
            <div className="skills-item ver-control w-fit h-fit bg-white rounded-2xl flex flex-col justify-center gap-10">
              <div
                className="text-center text-3xl font-bold"
                style={{ color: "rgb(29, 78, 216)" }}
              >
                Deployment
              </div>
              <div className="">
                <img src="/aws-logo.png" alt="" />
              </div>
              <div>
                <img src="/docker-logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="skills-item-4">
            <div className="skills-item ver-control w-fit h-fit bg-white rounded-2xl flex flex-col justify-center gap-10">
              <div
                className="text-center text-3xl font-bold"
                style={{ color: "rgb(29, 78, 216)" }}
              >
                Cooperation
              </div>
              <div className="">
                <img src="/slack-logo.png" alt="" />
              </div>
              <div>
                <img src="/notion-logo.png" alt="" />
              </div>
              <div>
                <img src="/figma-logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx="true">
        {`
          .skills-conteiner {
            padding-bottom: 6rem;
          }
          .skills-item:hover {
            transform: translateY(-10px);
            transition: all 0.2s ease-out;
          }
          .skills-item {
            padding-top: 2rem;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 2rem;
          }
        `}
      </style>
    </>
  );
}
