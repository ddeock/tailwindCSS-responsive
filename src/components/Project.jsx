import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Project.css'

gsap.registerPlugin(ScrollTrigger)

function Project() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.desktop-section-project .section-main-title',
        start: 'top 80%',
        end: 'bottom 60%',
        //markers: true,
        scrub: 1,
      }
    })

    // section-main-title 아래서 위로 → deco-title 왼쪽에서 제자리로
    tl.fromTo('.desktop-section-project .section-title-text',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0)
      .fromTo('.desktop-section-project .section-deco-title',
        { x: -100 }, { x: 0, ease: 'none', duration: 1 }, 1)

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.desktop-section-project .section-text-box',
        start: 'top 80%',
        end: 'bottom 60%',
        //markers: true,
        scrub: 1,
      }
    })

    tl2.fromTo('.desktop-section-project .sub-title-text',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0)
      .fromTo('.desktop-section-project .sub-text',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0.4)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

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
