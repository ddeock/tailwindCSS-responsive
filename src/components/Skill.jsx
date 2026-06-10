import './Skill.css'

function Skill() {
  return (
    <section className="desktop-section-skill w-[95%] max-w-[1740px] max-[1024px]:w-[95%] mx-auto">
      <div className="skill-inner w-full mx-auto">
        <div className="skill-frame">
          <div className="skill-icon skill-icon-1">
            <img src="/images/skill-icon1.svg" alt="Skill Icon 1" />
          </div>
          <div className="skill-icon skill-icon-2">
            <img src="/images/skill-icon2.svg" alt="Skill Icon 2" />
          </div>
          <div className="skill-icon skill-icon-3">
            <img src="/images/skill-icon3.svg" alt="Skill Icon 3" />
          </div>
          <div className="skill-icon skill-icon-4">
            <img src="/images/skill-icon4.svg" alt="Skill Icon 4" />
          </div>
          <div className="skill-icon skill-icon-5">
            <img src="/images/skill-icon5.svg" alt="Skill Icon 5" />
          </div>
          <div className="skill-text skill-text-1">
            <span className="skill-text-content">UI/UX</span>
          </div>
          <div className="skill-text skill-text-2">
            <span className="skill-text-content">HTML/CSS</span>
          </div>
          <div className="skill-text skill-text-3">
            <span className="skill-text-content">JAVASCRIPT</span>
          </div>
          <div className="skill-text skill-text-4">
            <span className="skill-text-content">REACT</span>
          </div>
          <div className="skill-text skill-text-5">
            <span className="skill-text-content">PORTFOLIO</span>
          </div>
          <div className="skill-text skill-text-6">
            <span className="skill-text-content">GENERATIVE AI</span>
          </div>
          <div className="skill-text skill-text-7">
            <span className="skill-text-content">VIBE CODING</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
