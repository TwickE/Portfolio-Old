import './Footer.css'
import iconsFile from '../../../assets/icons.svg'
import ReactImage from '../../../assets/skills-images.svg'
import { useEffect, useState, useCallback } from 'react';
import useNavigateHome from '../../../hooks/useNavigateHome';

function Footer() {
    const currentYear = new Date().getFullYear();
    const [footerStyle, setFooterStyle] = useState({});
    const handleHomeClick = useNavigateHome();
    const handleAboutClick = useNavigateHome('/about');
    const handleProjectsClick = useNavigateHome('/projects');
    const handleContactClick = useNavigateHome('/contact');

    const checkFooterPosition = useCallback(() => {
        const contentHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;

        if (contentHeight < viewportHeight) {
            setFooterStyle({ position: 'fixed'});
        } else {
            setFooterStyle({ position: 'static' });
        }
    }, []);

    useEffect(() => {
        checkFooterPosition();
        window.addEventListener('resize', checkFooterPosition);

        return () => {
            window.removeEventListener('resize', checkFooterPosition);
        };
    }, [checkFooterPosition]);

    return (
        <footer style={footerStyle} className='footer-container'>
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