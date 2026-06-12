import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TeamProject.css'

gsap.registerPlugin(ScrollTrigger)

function TeamProject() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.teamproject-img',
        start: 'top 80%',
        end: 'bottom 60%',
        //markers: true,
        scrub: 1,
      }
    })

    // teamproject-img-girl 먼저 → team-img-sun 순차적으로 아래에서 위로
    tl.fromTo('.teamproject-img-girl',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0)
      .fromTo('.team-img-sun',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0.4)

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.teamproject-box',
        start: 'top 80%',
        end: 'bottom 60%',
        //markers: true,
        scrub: 1,
      }
    })

    // small-title-box → teamproject-list 3개 순차적으로 아래에서 위로
    tl2.fromTo('.small-title-box',
        { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0)

    // 같은 클래스 3개를 개별로 체이닝
    gsap.utils.toArray('.teamproject-list').forEach((el, i) => {
      tl2.fromTo(el, { y: 50 }, { y: 0, ease: 'none', duration: 1 }, 0.4 + i * 0.4)
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section className="desktop-section-teamproject w-[95%] max-w-[1740px] max-[1024px]:w-[95%] mx-auto">
      <div className="teamproject-inner w-full mx-auto">
        <div className="teamproject-img">
          <div className="teamproject-img-girl">
            <img src="/images/teamproject-img-girl.png" alt="Team Project Girl" />
          </div>
          <div className="team-img-sun">
            <img src="/images/team-img-sun.png" alt="Sun" />
          </div>
        </div>
        <div className="teamproject-box w-full max-[1440px]:w-[95%] max-[1440px]:mx-auto">
          <div className="small-title-box">
            <div className="small-main-title">
              <h2 className="small-main-title-text">Team Project</h2>
            </div>
            <div className="small-sub-box">
              <div className="small-sub-title">
                <span className="small-sub-title-text">K-brand renewal project in progress</span>
              </div>
              <div className="small-sub-text">
                <p className="small-sub-text-content">This is a UI/UX renewal project that identifies analyzes<br />user issues and redesigns the UI/UX.</p>
              </div>
            </div>
          </div>
          <div className="teamproject-list">
            <div className="left-box">
              <div className="num-title">
                <span className="num-title-text">01</span>
              </div>
              <div className="text-box">
                <div className="title-box">
                  <div className="project-name">
                    <span className="project-name-text">SM Entertainment</span>
                  </div>
                  <div className="big-caption">
                    <span className="big-caption-text">-Redisign Project</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="en-text">
                    <p className="en-text-content">This is a UI/UX renewal project that identifies analyzes user issues and redesigns the UI/UX.</p>
                  </div>
                  <div className="kr-text">
                    <p className="kr-text-content">사용자 문제를 분析 파악하여 사용자 문제 해결 방안을 제시한 UI/UX를 재설계한 UI/UX 리뉴얼 프로젝트입니다.</p>
                  </div>
                </div>
                <div className="small-caption">
                  <span className="small-caption-text">Team Project</span>
                </div>
              </div>
            </div>
            <div className="teamproject-img-right">
              <img src="/images/teamproject-img-1.png" alt="Team Project 1" />
            </div>
          </div>
          <div className="teamproject-list">
            <div className="left-box">
              <div className="num-title">
                <span className="num-title-text">02</span>
              </div>
              <div className="text-box">
                <div className="title-box">
                  <div className="project-name">
                    <span className="project-name-text">SM Entertainment</span>
                  </div>
                  <div className="big-caption">
                    <span className="big-caption-text">-Redisign Project</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="en-text">
                    <p className="en-text-content">This is a UI/UX renewal project that identifies analyzes user issues and redesigns the UI/UX.</p>
                  </div>
                  <div className="kr-text">
                    <p className="kr-text-content">사용자 문제를 분析 파악하여 사용자 문제 해결 방안을 제시한 UI/UX를 재설계한 UI/UX 리뉴얼 프로젝트입니다.</p>
                  </div>
                </div>
                <div className="small-caption">
                  <span className="small-caption-text">Team Project</span>
                </div>
              </div>
            </div>
            <div className="teamproject-img-right">
              <img src="/images/teamproject-img-2.png" alt="Team Project 2" />
            </div>
          </div>
          <div className="teamproject-list">
            <div className="left-box">
              <div className="num-title">
                <span className="num-title-text">03</span>
              </div>
              <div className="text-box">
                <div className="title-box">
                  <div className="project-name">
                    <span className="project-name-text">SM Entertainment</span>
                  </div>
                  <div className="big-caption">
                    <span className="big-caption-text">-Redisign Project</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="en-text">
                    <p className="en-text-content">This is a UI/UX renewal project that identifies analyzes user issues and redesigns the UI/UX.</p>
                  </div>
                  <div className="kr-text">
                    <p className="kr-text-content">사용자 문제를 분析 파악하여 사용자 문제 해결 방안을 제시한 UI/UX를 재설계한 UI/UX 리뉴얼 프로젝트입니다.</p>
                  </div>
                </div>
                <div className="small-caption">
                  <span className="small-caption-text">Team Project</span>
                </div>
              </div>
            </div>
            <div className="teamproject-img-right">
              <img src="/images/teamproject-img-3.png" alt="Team Project 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamProject
