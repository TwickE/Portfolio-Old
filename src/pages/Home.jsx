import Navbar from "../components/main-components/Navbar/Navbar"
import HeroSection from "../components/main-components/HeroSection/HeroSection"
import MySkillsSection from "../components/main-components/MySkillsSection/MySkillsSection"
import MyProjectsSection from "../components/main-components/MyProjectsSection/MyProjectsSection"

function Home() {
    return (
        <>
            <Navbar activeLink="home" />
            <HeroSection />
            <MySkillsSection backgroundColor={true}/>
            <MyProjectsSection backgroundColor={false}/>
        </>
    )
}

export default Home