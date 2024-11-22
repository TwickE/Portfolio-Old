import Navbar from "../components/main-components/Navbar/Navbar"
import MatrixRainingCode from "../components/main-components/MatrixRainingCode/MatrixRainingCode"
import Footer from "../components/main-components/Footer/Footer"
import NotFoundSection from "../components/main-components/NotFoundSection/NotFoundSection"
import ScrollToTop from "../hooks/ScrollToTop"
import GoUp from "../components/sub-components/GoUp/GoUp"

function NotFound() {
    return (
        <div style={{minHeight: '100vh'}}>
            <MatrixRainingCode />
            <div style={{position: 'absolute', top: '0px', left: '0px', width: '100%'}}>
                <ScrollToTop />
                <Navbar />
                <NotFoundSection />
                <GoUp />
                <Footer />
            </div>
        </div>
    )
}

export default NotFound