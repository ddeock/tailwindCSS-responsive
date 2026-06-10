import './Hero.css'

function Hero() {
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
