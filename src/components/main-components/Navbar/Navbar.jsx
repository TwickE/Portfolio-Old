import './Navbar.css'
import FilledButton from '../../sub-components/FilledButton/FilledButton'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import iconsFile from '../../../assets/icons.svg'

function Navbar(props) {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [mobileThemeMenuActive, setMobileThemeMenuActive] = useState(false);

    const mobileMenuItemsStyles = {
        height: isMenuActive ?'calc(100dvh - 100px)' : '0px',
        opacity: isMenuActive ? 1 : 0
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.querySelector('html').setAttribute('data-theme', savedTheme);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleTheme = (e) => {
        const newTheme = e.target.innerText.toLowerCase();
        setTheme(newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const handleMenuButtonClick = () => {
        setIsMenuActive(!isMenuActive);
        document.body.classList.toggle('no-scroll', !isMenuActive);
    };

    const toggleMobileThemeButton = () => {
        setMobileThemeMenuActive(!mobileThemeMenuActive);
    };

    return (
        <>
            <object type="image/svg+xml" data={iconsFile} style={{display: 'none'}}></object>
            <header className={scrolled ? 'scrolled' : ''}>
                <nav className='navbar'>
                    <div className='navbar-section'>
                        <Link to='/'>
                            <svg className='logo'>
                                <use href={`${iconsFile}#main-icon`}></use>
                            </svg>
                        </Link>
                        <span>Fred&apos;s Portfolio</span>
                    </div>
                    <div className='navbar-section'>
                        <ul className='navbar-items'>
                            <li className='navbar-item'>
                                <Link className={`navbar-link ${props.activeLink === 'home' ? 'link-active' : ''}`} to='/'>Home</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link className={`navbar-link ${props.activeLink === 'about' ? 'link-active' : ''}`} to='/about'>About</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link className={`navbar-link ${props.activeLink === 'projects' ? 'link-active' : ''}`} to='/projects'>Projects</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link className={`navbar-link ${props.activeLink === 'contact' ? 'link-active' : ''}`} to='/contact'>Contact</Link>
                            </li>
                            <li className='navbar-item theme-menu'>
                                <span>Theme</span>
                                <ul className='theme-submenu'>
                                    <div className='theme-submenu-item' onClick={toggleTheme}>
                                        <svg className={theme === 'light' ? 'active-mode' : ''}>
                                            <use href={`${iconsFile}#lightmode-icon`}></use>
                                        </svg>
                                        <li className={theme === 'light' ? 'active-mode' : ''}>Light</li>
                                    </div>
                                    <div className='theme-submenu-item' onClick={toggleTheme}>
                                        <svg className={theme === 'dark' ? 'active-mode' : ''}>
                                            <use href={`${iconsFile}#darkmode-icon`}></use>
                                        </svg>
                                        <li className={theme === 'dark' ? 'active-mode' : ''}>Dark</li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <FilledButton text='Hire Me!' />
                    </div>
                    <div className='mobile-menu'>
                        <FilledButton text='Hire Me!' />
                        <button className={`menu-button ${isMenuActive ? 'shrink' : ''}`} onClick={handleMenuButtonClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </header>
            <div style={mobileMenuItemsStyles} className='mobile-menu-items'>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none'}} className='mobile-menu-link' to='/'>Home</Link>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none'}} className='mobile-menu-link' to='/about'>About</Link>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none'}} className='mobile-menu-link' to='/projects'>Projects</Link>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none'}} className='mobile-menu-link' to='/contact'>Contact</Link>
                <span style={{ pointerEvents: isMenuActive ? 'auto' : 'none'}} className={`mobile-menu-link mobile-menu-theme ${mobileThemeMenuActive ? 'active' : ''}`} onClick={toggleMobileThemeButton}>Theme</span>
                <div style={{ pointerEvents: isMenuActive ? 'auto' : 'none'}} className={`mobile-menu-theme-item ${mobileThemeMenuActive ? 'visible' : 'hidden'}`} onClick={toggleTheme}>
                    <svg className={theme === 'light' ? 'active-mode' : ''}>
                        <use href={`${iconsFile}#lightmode-icon`}></use>
                    </svg>
                    <span className={theme === 'light' ? 'active-mode' : ''}>Light</span>
                </div>
                <div style={{ pointerEvents: isMenuActive ? 'auto' : 'none'}} className={`mobile-menu-theme-item ${mobileThemeMenuActive ? 'visible' : 'hidden'}`} onClick={toggleTheme}>
                    <svg className={theme === 'dark' ? 'active-mode' : ''}>
                        <use href={`${iconsFile}#darkmode-icon`}></use>
                    </svg>
                    <span className={theme === 'dark' ? 'active-mode' : ''}>Dark</span>
                </div>
            </div>
        </>
    )
}

Navbar.propTypes = {
    activeLink: PropTypes.string.isRequired
};

export default Navbar