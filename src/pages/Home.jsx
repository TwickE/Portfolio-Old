import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import MySkillsSection from "../components/MySkillsSection"

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