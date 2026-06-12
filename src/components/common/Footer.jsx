import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-inner',
        start: 'top 80%',
        end: 'bottom 60%',
        //markers: true,
        scrub: 1,
      }
    })

    // 순차 slide-up + deco-title은 왼쪽에서 제자리로
    tl.fromTo('.desktop-section-contact .section-main-title',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0)
      .fromTo('.desktop-section-contact .section-deco-title',
        { x: -100 }, { x: 0, ease: 'none', duration: 1 }, 0)
      .fromTo('.desktop-section-contact .sub-title-text',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0.4)
      .fromTo('.desktop-section-contact .sub-text-content',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0.8)
      .fromTo('.contact-tel',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 1.2)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section className="desktop-section-contact w-full mx-auto">
      <div className="contact-inner w-full mx-auto">
        <div className="section-main-title">
          <div className="section-deco-title">
            <span className="deco-title-text">ME</span>
          </div>
          <h2 className="section-title-text">CONTACT</h2>
        </div>
        <div className="section-text-box">
          <div className="sub-title">
            <span className="sub-title-text">"Do you want to get a job at a large,<br />solid company?"</span>
          </div>
          <div className="sub-text">
            <p className="sub-text-content">여러분의 잠재된 재능까지 끌어내어 최신트렌드에 맞는 포트폴리오로<br />웹전문가의 첫발을 딛을 수 있도록 J.young이 함께합니다."</p>
          </div>
        </div>
        <div className="contact-tel">
          <span className="contact-tel-text">010 1234 1234</span>
        </div>
      </div>
    </section>
  )
}

export default Footer
