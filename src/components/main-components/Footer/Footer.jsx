import './Footer.css'
import iconsFile from '../../../assets/icons.svg'
import ReactImage from '../../../assets/skills-images.svg'
import useNavigateHome from '../../../hooks/useNavigateHome';

function Footer() {
    const currentYear = new Date().getFullYear();
    const handleHomeClick = useNavigateHome();
    const handleAboutClick = useNavigateHome('/about');
    const handleProjectsClick = useNavigateHome('/projects');
    const handleContactClick = useNavigateHome('/contact');

    return (
        <footer className='footer-container'>
            <div className='footer-inner-container'>
                <button className='footer-navlink' onClick={handleHomeClick}>
                    <svg className='footer-main-icon'>
                        <use href={`${iconsFile}#main-icon`}></use>
                    </svg>
                </button>
                <div className='footer-navlink-container'>
                    <button className='footer-navlink' onClick={handleHomeClick}>Home</button>
                    <button className='footer-navlink' onClick={handleAboutClick}>About</button>
                    <button className='footer-navlink' onClick={handleProjectsClick}>Projects</button>
                    <button className='footer-navlink' onClick={handleContactClick}>Contact</button>
                </div>
                <div className='footer-credits'>
                    <svg className='footer-react-icon'>
                        <use href={`${ReactImage}#react-icon`}></use>
                    </svg>
                    <p>Made with React JS</p>
                    <p>{`© ${currentYear} All rights reserved by Frederico Silva`}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer