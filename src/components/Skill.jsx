import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skill.css'

gsap.registerPlugin(ScrollTrigger)

function Skill() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill-frame',
        start: 'top 80%',
        end: 'bottom 60%',
       // markers: true,
      }
    })

    // 체이닝 fromTo: skill-text 7개 순차적으로 아래에서 위로
    tl.fromTo('.skill-text-1', { y: 100 }, { y: 0, ease: 'power2.out', duration: 0.3 }, 0)
      .fromTo('.skill-text-2', { y: 100 }, { y: 0, ease: 'power2.out', duration: 0.3 }, 0.15)
      .fromTo('.skill-text-3', { y: 100 }, { y: 0, ease: 'power2.out', duration: 0.3 }, 0.3)
      .fromTo('.skill-text-4', { y: 100 }, { y: 0, ease: 'power2.out', duration: 0.3 }, 0.45)
      .fromTo('.skill-text-5', { y: 100 }, { y: 0, ease: 'power2.out', duration: 0.3 }, 0.6)
      .fromTo('.skill-text-6', { y: 100 }, { y: 0, ease: 'power2.out', duration: 0.3 }, 0.75)
      .fromTo('.skill-text-7', { y: 100 }, { y: 0, ease: 'power2.out', duration: 0.3 }, 0.9)

    // 아이콘 애니메이션 (skill-text와 별도 타임라인)
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill-frame',
        start: 'top 80%',
        end: 'bottom 60%',
        //markers: true,
      }
    })

    // 1, 3, 5 — 왼쪽에서 제자리로
    tl2.fromTo('.skill-icon-1', { x: -100 }, { x: 0, ease: 'power2.out', duration: 0.3 }, 0)
       .fromTo('.skill-icon-3', { x: -100 }, { x: 0, ease: 'power2.out', duration: 0.3 }, 0.15)
       .fromTo('.skill-icon-5', { x: -100 }, { x: 0, ease: 'power2.out', duration: 0.3 }, 0.3)
    // 2, 4 — 오른쪽에서 제자리로
       .fromTo('.skill-icon-2', { x: 100 }, { x: 0, ease: 'power2.out', duration: 0.3 }, 0)
       .fromTo('.skill-icon-4', { x: 100 }, { x: 0, ease: 'power2.out', duration: 0.3 }, 0.15)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

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
