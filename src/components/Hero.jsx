import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.desktop-section-hero',
        start: '70% 100%', // 섹션 상단이 화면 80% 지점에 닿으면 시작
        end: '70% 60%',
        //markers: true,
        scrub: 1,
      }
    })

    // 순차적으로 slide-up: hero-title-text → hero-sub-text → hero-img
    tl.fromTo('.hero-title-text', { y: 50}, { y: 0, ease: 'none', duration: 1 }, 0)
      .fromTo('.hero-sub-text',   { y: 50}, { y: 0, ease: 'none', duration: 1 }, 0.2)
      .fromTo('.hero-img',        { x: 50}, { x: 0, ease: 'none', duration: 5 }, 0.4)

    return () => {
      // 컴포넌트 언마운트 시 ScrollTrigger 정리
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section className="desktop-section-hero w-[95%] max-w-[1740px] max-[1024px]:w-[95%] mx-auto">
      <div className="hero-inner w-full mx-auto">
        <div className="hero-main-title">
          <h1 className="hero-title-text">UI/UX<br />FRONTEND<br />INSTRUCTOR</h1>
        </div>
        <div className="hero-sub-text">
          <p className="hero-sub-text-content">We train professionals by creating high-quality portfolios through practical training starting from the basics!</p>
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/hero-img.png" alt="Hero Illustration" />
      </div>
    </section>
  )
}

export default Hero
