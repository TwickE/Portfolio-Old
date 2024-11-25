import Navbar from "../components/main-components/Navbar/Navbar"
import MatrixRainingCode from "../components/main-components/MatrixRainingCode/MatrixRainingCode"
import Footer from "../components/main-components/Footer/Footer"
import NotFoundSection from "../components/main-components/NotFoundSection/NotFoundSection"
import useScrollToTop from "../hooks/useScrollToTop"
import GoUp from "../components/sub-components/GoUp/GoUp"

function NotFound() {
    useScrollToTop();

    return (
        <div style={{minHeight: '100vh'}}>
            <MatrixRainingCode />
            <div style={{position: 'absolute', top: '0px', left: '0px', width: '100%'}}>
                <Navbar />
                <NotFoundSection />
                <GoUp />
                <Footer />
            </div>
        </div>
    )
}

export default NotFound