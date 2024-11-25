import Navbar from "../components/main-components/Navbar/Navbar"
import BreadcrumbSection from "../components/main-components/BreadcrumbSection/BreadcrumbSection"
import useScrollToTop from "../hooks/useScrollToTop"
import ContactSection from "../components/main-components/ContactSection/ContactSection"
import GoUp from "../components/sub-components/GoUp/GoUp"
import Footer from "../components/main-components/Footer/Footer"
import useScrollUpdate from "../hooks/useScrollUpdate"

function Contact() {
    useScrollToTop();
    useScrollUpdate();

    return (
        <>
            <Navbar activeLink="contact" />
            <BreadcrumbSection location="Contact" />
            <ContactSection backgroundColor={true} />
            <GoUp />
            <Footer />
        </>
    )
}

export default Contact