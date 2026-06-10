import './Project.css'

function Project() {
  return (
    <section className="desktop-section-project w-[95%] max-w-[1740px] max-[1024px]:w-[95%] mx-auto">
      <div className="project-inner w-full mx-auto">
        <div className="section-main-title">
          <div className="section-deco-title">
            <span className="deco-title-text">STUDENT</span>
          </div>
          <h2 className="section-title-text">PROJECT</h2>
        </div>
        <div className="section-text-box">
          <div className="sub-title">
            <span className="sub-title-text">
              <span className="sub-title-italic">"This is a [team project + personal branding]</span>portfolio of graduates."
            </span>
          </div>
          <div className="sub-text">
            <p className="sub-text-content">교육과정 기간에 진행해서 만든<br />수료생들의 팀프로젝트 + 퍼스널 브랜딩 포트폴리오입니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
