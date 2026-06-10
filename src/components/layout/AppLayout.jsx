import Header from '../common/Header'
import Footer from '../common/Footer'

function AppLayout({ children }) {
  return (
    <>
      <div className="wrap w-full max-w-[1920px] mx-auto overflow-hidden">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default AppLayout
