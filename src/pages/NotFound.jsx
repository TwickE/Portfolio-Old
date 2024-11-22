import Navbar from "../components/main-components/Navbar/Navbar"
import MatrixRainingCode from "../components/main-components/MatrixRainingCode/MatrixRainingCode"
import Footer from "../components/main-components/Footer/Footer"

function NotFound() {
    return (
        <div style={{minHeight: '100vh'}}>
            <MatrixRainingCode />
            <div style={{position: 'absolute', top: '0px', left: '0px', width: '100%'}}>
                <Navbar />
                <Footer />
            </div>
        </div>
    )
}

export default NotFound