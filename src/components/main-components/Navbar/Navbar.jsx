import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import iconsFile from '../../../assets/icons.svg'

function Navbar(props) {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [mobileThemeMenuActive, setMobileThemeMenuActive] = useState(false);
    const location = useLocation();

    const changeNavbarColor = () => {
        if(location.pathname !== '/' && scrolled === false) {
            return {
                color: 'white',
                fill: 'white'
            }
        }
    }

    const mobileMenuItemsStyles = {
        height: isMenuActive ? 'calc(100dvh - 100px)' : '0px',
        opacity: isMenuActive ? 1 : 0
    }

    useEffect(() => {
        const closeMenu = () => {
            setIsMenuActive(false);
            setMobileThemeMenuActive(false);
            document.body.classList.remove('no-scroll');
        }
        window.addEventListener('resize', closeMenu);
        return () => {
            window.removeEventListener('resize', closeMenu);
        };
    }, []);

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
        <header className={scrolled ? 'scrolled' : ''}>
            <nav className='navbar'>
                <div className='navbar-section'>
                    <Link to='/'>
                        <svg className='logo' style={changeNavbarColor()} >
                            <use href={`${iconsFile}#main-icon`}></use>
                        </svg>
                    </Link>
                    <span style={changeNavbarColor()} >Fred&apos;s Portfolio</span>
                </div>
                <div className='navbar-section'>
                    <ul className='navbar-items'>
                        <li className='navbar-item'>
                            <Link className={`navbar-link ${props.activeLink === 'home' ? 'link-active' : ''}`} style={changeNavbarColor()} to='/'>Home</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className={`navbar-link ${props.activeLink === 'about' ? 'link-active' : ''}`} style={changeNavbarColor()} to='/about'>About</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className={`navbar-link ${props.activeLink === 'projects' ? 'link-active' : ''}`} style={changeNavbarColor()} to='/projects'>Projects</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className={`navbar-link ${props.activeLink === 'contact' ? 'link-active' : ''}`} style={changeNavbarColor()} to='/contact'>Contact</Link>
                        </li>
                        <li className='navbar-item theme-menu'>
                            <span style={changeNavbarColor()} >Theme</span>
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
                    <button className='filled-button' onClick={() => (window.open('https://www.linkedin.com/in/frederico-silva-727a8b21a/', '_blank'))}>Hire Me!</button>
                </div>
                <div className='mobile-menu'>
                    <button className='filled-button'>Hire Me!</button>
                    <button className={`menu-button ${isMenuActive ? 'shrink' : ''}`} onClick={handleMenuButtonClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div style={mobileMenuItemsStyles} className='mobile-menu-items'>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none' }} className='mobile-menu-link' to='/'>Home</Link>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none' }} className='mobile-menu-link' to='/about'>About</Link>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none' }} className='mobile-menu-link' to='/projects'>Projects</Link>
                <Link style={{ pointerEvents: isMenuActive ? 'auto' : 'none' }} className='mobile-menu-link' to='/contact'>Contact</Link>
                <span style={{ pointerEvents: isMenuActive ? 'auto' : 'none' }} className={`mobile-menu-link mobile-menu-theme ${mobileThemeMenuActive ? 'active' : ''}`} onClick={toggleMobileThemeButton}>Theme</span>
                <div style={{ pointerEvents: isMenuActive ? 'auto' : 'none' }} className={`mobile-menu-theme-item ${mobileThemeMenuActive ? 'visible' : 'hidden'}`} onClick={toggleTheme}>
                    <svg className={theme === 'light' ? 'active-mode' : ''}>
                        <use href={`${iconsFile}#lightmode-icon`}></use>
                    </svg>
                    <span className={theme === 'light' ? 'active-mode' : ''}>Light</span>
                </div>
                <div style={{ pointerEvents: isMenuActive ? 'auto' : 'none' }} className={`mobile-menu-theme-item ${mobileThemeMenuActive ? 'visible' : 'hidden'}`} onClick={toggleTheme}>
                    <svg className={theme === 'dark' ? 'active-mode' : ''}>
                        <use href={`${iconsFile}#darkmode-icon`}></use>
                    </svg>
                    <span className={theme === 'dark' ? 'active-mode' : ''}>Dark</span>
                </div>
            </div>
        </header>
    )
}

Navbar.propTypes = {
    activeLink: PropTypes.string
};

export default Navbar