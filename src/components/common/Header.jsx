import './Header.css'

function Header() {
  return (
    <header className="desktop-header w-full max-[1740px]:w-[95%] mx-auto">
      <div className="header-inner w-full mx-auto py-5 flex justify-between items-center">
        <div className="logo">
          <img src="/images/logo.svg" alt="J.YOUNG'S PORTFOLIO" />
        </div>
        <nav className="gnb">
          <a href="#" className="gnb-item">HOME</a>
          <a href="#" className="gnb-item">ABOUT</a>
          <a href="#" className="gnb-item">SKILL</a>
          <a href="#" className="gnb-item">PROJECT</a>
          <a href="#" className="gnb-item">UIUX</a>
          <a href="#" className="gnb-item">CONTACT</a>
        </nav>
        <div className="menu-icon">
          <img src="/images/menu-open.svg" alt="Menu" />
        </div>
      </div>
    </header>
  )
}

export default Header
