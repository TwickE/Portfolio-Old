import Navbar from "../components/main-components/Navbar/Navbar"
import HeroSection from "../components/main-components/HeroSection/HeroSection"
import MySkillsSection from "../components/main-components/MySkillsSection/MySkillsSection"

function Home() {
    return (
        <>
            <Navbar activeLink="home" />
            <HeroSection />
            <MySkillsSection backgroundColor={true}/>
        </>
    )
}

export default Home