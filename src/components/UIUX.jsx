import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './UIUX.css'

gsap.registerPlugin(ScrollTrigger)

function UIUX() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.uiux-inner',
        start: 'top 80%',
        end: 'bottom 60%',
        //markers: true,
        scrub: 1,
      }
    })

    // small-title-box 먼저, 이후 list 3개 순차 체이닝 fromTo
    tl.fromTo('.desktop-section-uiux .small-title-box',
        { y: 72 }, { y: 0, ease: 'none', duration: 1 }, 0)

    gsap.utils.toArray('.desktop-section-uiux .list').forEach((el, i) => {
      tl.fromTo(el, { y: 72 }, { y: 0, ease: 'none', duration: 1 }, 0.4 + i * 0.4)
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section className="desktop-section-uiux w-[95%] max-w-[1740px] max-[1024px]:w-[95%] mx-auto">
      <div className="uiux-inner w-full max-w-[1440px] mx-auto max-[1440px]:w-[95%]">
        <div className="small-title-box">
          <div className="small-main-title">
            <h2 className="small-main-title-text">UIUX</h2>
          </div>
          <div className="small-sub-box">
            <div className="small-sub-title">
              <span className="small-sub-title-text">We designed the user experience</span>
            </div>
            <div className="small-sub-text">
              <p className="small-sub-text-content">데스크 리서치를 통한 사용자의 니즈와 문제점을 파악하여<br />개선점을 도출한 UIUX process</p>
            </div>
          </div>
        </div>
        <div className="uiux-box">
          <div className="list">
            <div className="list-box">
              <div className="heart-box">
                <img src="/images/heart.svg" alt="Heart" className="heart-icon" />
              </div>
              <div className="uiux-img">
                <img src="/images/uiux-img-1.png" alt="UIUX 1" />
              </div>
              <div className="uiux-name-box">
                <div className="img-name">
                  <span className="img-name-text">Tamburins Cosmetic</span>
                </div>
                <div className="date">
                  <span className="date-text">2025.08</span>
                </div>
              </div>
            </div>
            <div className="list-box">
              <div className="heart-box">
                <img src="/images/heart.svg" alt="Heart" className="heart-icon" />
              </div>
              <div className="uiux-img">
                <img src="/images/uiux-img-2.png" alt="UIUX 2" />
              </div>
              <div className="uiux-name-box">
                <div className="img-name">
                  <span className="img-name-text">Tamburins Cosmetic</span>
                </div>
                <div className="date">
                  <span className="date-text">2025.08</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="list-box">
              <div className="heart-box">
                <img src="/images/heart.svg" alt="Heart" className="heart-icon" />
              </div>
              <div className="uiux-img">
                <img src="/images/uiux-img-3.png" alt="UIUX 3" />
              </div>
              <div className="uiux-name-box">
                <div className="img-name">
                  <span className="img-name-text">Tamburins Cosmetic</span>
                </div>
                <div className="date">
                  <span className="date-text">2025.08</span>
                </div>
              </div>
            </div>
            <div className="list-box">
              <div className="heart-box">
                <img src="/images/heart.svg" alt="Heart" className="heart-icon" />
              </div>
              <div className="uiux-img">
                <img src="/images/uiux-img-4.png" alt="UIUX 4" />
              </div>
              <div className="uiux-name-box">
                <div className="img-name">
                  <span className="img-name-text">Tamburins Cosmetic</span>
                </div>
                <div className="date">
                  <span className="date-text">2025.08</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="list-box">
              <div className="heart-box">
                <img src="/images/heart.svg" alt="Heart" className="heart-icon" />
              </div>
              <div className="uiux-img">
                <img src="/images/uiux-img-5.png" alt="UIUX 5" />
              </div>
              <div className="uiux-name-box">
                <div className="img-name">
                  <span className="img-name-text">Tamburins Cosmetic</span>
                </div>
                <div className="date">
                  <span className="date-text">2025.08</span>
                </div>
              </div>
            </div>
            <div className="list-box">
              <div className="heart-box">
                <img src="/images/heart.svg" alt="Heart" className="heart-icon" />
              </div>
              <div className="uiux-img">
                <img src="/images/uiux-img-6.png" alt="UIUX 6" />
              </div>
              <div className="uiux-name-box">
                <div className="img-name">
                  <span className="img-name-text">Tamburins Cosmetic</span>
                </div>
                <div className="date">
                  <span className="date-text">2025.08</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UIUX
