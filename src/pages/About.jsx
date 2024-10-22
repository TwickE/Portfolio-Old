import Navbar from "../components/main-components/Navbar/Navbar"
import BreadcrumbSection from "../components/main-components/BreadcrumbSection/BreadcrumbSection"
import Footer from "../components/main-components/Footer/Footer"
import MySkillsSection from "../components/main-components/MySkillsSection/MySkillsSection"
import MyResumeSection from "../components/main-components/MyResumeSection/MyResumeSection"
import LetsTalkSection from "../components/main-components/LetsTalkSection/LetsTalkSection"
import ScrollToTop from "../hooks/ScrollToTop"
import GoUp from "../components/sub-components/GoUp/GoUp"

function About() {
    return (
        <>
            <ScrollToTop />
            <Navbar activeLink="about" />
            <BreadcrumbSection location="About" />
            <MySkillsSection backgroundColor={true}/>
            <MyResumeSection backgroundColor={false}/>
            <LetsTalkSection backgroundColor={true}/>
            <GoUp />
            <Footer />
        </>
    )
}

export default About