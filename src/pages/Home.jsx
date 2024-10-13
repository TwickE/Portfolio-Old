import Navbar from "../components/main-components/Navbar/Navbar"
import HeroSection from "../components/main-components/HeroSection/HeroSection"
import MySkillsSection from "../components/main-components/MySkillsSection/MySkillsSection"
import MyProjectsSection from "../components/main-components/MyProjectsSection/MyProjectsSection"
import MyResumeSection from "../components/main-components/MyResumeSection/MyResumeSection"
import ContactSection from "../components/main-components/ContactSection/ContactSection"
import Footer from "../components/main-components/Footer/Footer"

function Home() {
    return (
        <>
            <Navbar activeLink="home" />
            <HeroSection />
            <MySkillsSection backgroundColor={true}/>
            <MyProjectsSection backgroundColor={false}/>
            <MyResumeSection backgroundColor={true}/>
            <ContactSection backgroundColor={false}/>
            <Footer />
        </>
    )
}

export default Home