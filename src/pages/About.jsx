import Navbar from "../components/main-components/Navbar/Navbar"
import BreadcrumbSection from "../components/main-components/BreadcrumbSection/BreadcrumbSection"

function About() {
    return (
        <>
            <Navbar activeLink="about" />
            <BreadcrumbSection location="About" />
        </>
    )
}

export default About