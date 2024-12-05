import './Footer.css'
import iconsFile from '../../../assets/icons.svg'
import { Link } from 'react-router-dom'
import ReactImage from '../../../assets/skills-images.svg'
import { useEffect, useState } from 'react';
import useNavigateHome from '../../../hooks/useNavigateHome';

function Footer() {
    const currentYear = new Date().getFullYear();
    const [footerStyle, setFooterStyle] = useState({});
    const handleLogoClick = useNavigateHome();

    useEffect(() => {
        const checkFooterPosition = () => {
            const contentHeight = document.body.scrollHeight;
            const viewportHeight = window.innerHeight;

            if (contentHeight < viewportHeight) {
                setFooterStyle({ position: 'fixed'});
            } else {
                setFooterStyle({ position: 'static' });
            }
        };

        checkFooterPosition();
        window.addEventListener('resize', checkFooterPosition);

        return () => {
            window.removeEventListener('resize', checkFooterPosition);
        };
    }, []);

    return (
        <footer style={footerStyle} className='footer-container'>
            <div className='footer-inner-container'>
                <button className='footer-navlink' onClick={handleLogoClick}>
                    <svg className='footer-main-icon'>
                        <use href={`${iconsFile}#main-icon`}></use>
                    </svg>
                </button>
                <div className='footer-navlink-container'>
                    <Link className='footer-navlink' to='/'>Home</Link>
                    <Link className='footer-navlink' to='/about'>About</Link>
                    <Link className='footer-navlink' to='/projects'>Projects</Link>
                    <Link className='footer-navlink' to='/contact'>Contact</Link>
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