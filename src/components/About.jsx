import './About.css'

function About() {
  return (
    <section className="desktop-section-aboutw-[95%] max-w-[1740px] max-[1024px]:w-[95%] mx-auto">
      <div className="about-inner w-full mx-auto">
        <div className="section-main-title">
          <div className="section-deco-title">
            <span className="deco-title-text">ABOUT</span>
          </div>
          <h2 className="section-title-text">ME</h2>
          <div className="paper-airplane">
            <img src="/images/paper-airplane 1.svg" alt="Paper Airplane" />
          </div>
        </div>
        <div className="about-main-text">
          <div className="section-text-box">
            <div className="sub-title">
              <span className="sub-title-text"><span className="sub-title-italic">"UI/UX, FrontEnd [Practical + Lecture]"</span>25years of experience!</span>
            </div>
            <div className="sub-text">
              <p className="sub-text-content">"UI/UX, 프론트엔드[실무 + 강의]25년차! 최신 트렌드를 분석하여,<br />실무에서 인정받는 인재 양성을 목표로 열정을 다하는 강사 J.young입니다"</p>
            </div>
          </div>
          <div className="about-bottom-box">
            <div className="edu-title">
              <h3 className="edu-title-text">Educational Goals</h3>
            </div>
            <div className="edu-text">
              <div className="edu-list">
                <div className="check-icon">
                  <img src="/images/check-icon.svg" alt="Check Icon" />
                </div>
                <div className="edu-list-text">
                  <span>최신트렌드를 분석하여 내것화 시킬수 있는 UI디자이너</span>
                </div>
              </div>
              <div className="edu-list">
                <div className="check-icon">
                  <img src="/images/check-icon.svg" alt="Check Icon" />
                </div>
                <div className="edu-list-text">
                  <span>사용자의 니즈와 문제를 도출하여 솔루션을 제시하는 UX디자이너</span>
                </div>
              </div>
              <div className="edu-list">
                <div className="check-icon">
                  <img src="/images/check-icon.svg" alt="Check Icon" />
                </div>
                <div className="edu-list-text">
                  <span>html/css/js/react를 통한 최신 트렌드에 적합한 웹사이트를 구현하는 개발자</span>
                </div>
              </div>
              <div className="edu-list">
                <div className="check-icon">
                  <img src="/images/check-icon.svg" alt="Check Icon" />
                </div>
                <div className="edu-list-text">
                  <span>면접관의 눈길을 사로잡는 포폴제작으로 합격하는 디자이너</span>
                </div>
              </div>
              <div className="edu-list">
                <div className="check-icon">
                  <img src="/images/check-icon.svg" alt="Check Icon" />
                </div>
                <div className="edu-list-text">
                  <span>생성형AI로 업무 생산성과 효율을 극대화하는 인재</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
