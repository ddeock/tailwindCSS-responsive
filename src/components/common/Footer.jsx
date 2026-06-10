import './Footer.css'

function Footer() {
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
