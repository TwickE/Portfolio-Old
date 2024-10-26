import Navbar from "../components/main-components/Navbar/Navbar"
import BreadcrumbSection from "../components/main-components/BreadcrumbSection/BreadcrumbSection"
import ScrollToTop from "../hooks/ScrollToTop"
import MyProjectsSection from "../components/main-components/MyProjectsSection/MyProjectsSection"
import GoUp from "../components/sub-components/GoUp/GoUp"
import Footer from "../components/main-components/Footer/Footer"


function Projects() {
    return (
        <>
            <ScrollToTop />
            <Navbar activeLink="projects" />
            <BreadcrumbSection location="Projects" />
            <MyProjectsSection backgroundColor={true} allProjects={true}/>
            <GoUp />
            <Footer />
        </>
    )
}

export default Projects