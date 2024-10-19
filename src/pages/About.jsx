import Navbar from "../components/main-components/Navbar/Navbar"
import BreadcrumbSection from "../components/main-components/BreadcrumbSection/BreadcrumbSection"
import Footer from "../components/main-components/Footer/Footer"

function About() {
    return (
        <>
            <Navbar activeLink="about" />
            <BreadcrumbSection location="About" />
            <Footer />
        </>
    )
}

export default About