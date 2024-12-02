import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import iconsFile from '../../../assets/icons.svg'

function Navbar(props) {
    const [theme, setTheme] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileThemeMenu, setMobileThemeMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const toggleDarkMode = () => {
        localStorage.theme = 'dark'
        setTheme('dark')
        document.querySelector('html').setAttribute('data-theme', localStorage.theme);
        setMobileThemeMenu(false);
        setMobileMenu(false);
        document.body.style.overflow = 'auto';
    }

    const toggleLightMode = () => {
        localStorage.theme = 'light'
        setTheme('light')
        document.querySelector('html').setAttribute('data-theme', localStorage.theme);
        setMobileThemeMenu(false);
        setMobileMenu(false);
        document.body.style.overflow = 'auto';
    }

    const toggleSystemMode = () => {
        localStorage.removeItem('theme');
        setTheme('system');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.querySelector('html').setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
        setMobileThemeMenu(false);
        setMobileMenu(false);
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            toggleDarkMode();
        } else if (localStorage.theme === 'light') {
            toggleLightMode();
        } else {
            toggleSystemMode();
        }

        const systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e) => {
            if (theme === 'system') {
                document.querySelector('html').setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        };

        systemThemeListener.addEventListener('change', handleSystemThemeChange);

        return () => {
            systemThemeListener.removeEventListener('change', handleSystemThemeChange);
        };
    }, [theme]);

    const changeNavbarColor = (mobileMenuIcon) => {
        const paths = ['/about', '/projects', '/contact'];
        if (paths.includes(location.pathname) && scrolled === false) {
            if (mobileMenuIcon) {
                return {
                    backgroundColor: 'white',
                }
            } else {
                return {
                    color: 'white',
                    fill: 'white',
                }
            }
        }
    }

    const [delayedMobileMenuStyles, setDelayedMobileMenuStyles] = useState(false);
    const handleMobileMenuClick = () => {
        if (!mobileMenu) {
            document.body.style.overflow = 'hidden';
            setDelayedMobileMenuStyles(true)
            setTimeout(() => setMobileMenu(true), 10)
        } else {
            document.body.style.overflow = 'auto';
            setMobileMenu(false)
        }
    };

    useEffect(() => {
        if (!mobileMenu) {
            const timeout = setTimeout(() => setDelayedMobileMenuStyles(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [mobileMenu]);


    const [delayedMobileThemeMenuStyles, setDelayedMobileThemeMenuStyles] = useState(false);
    const handleMobileThemeMenuClick = () => {
        if (!mobileThemeMenu) {
            setDelayedMobileThemeMenuStyles(true)
            setTimeout(() => setMobileThemeMenu(true), 10)
        } else {
            setMobileThemeMenu(false)
        }
    }

    useEffect(() => {
        if (!mobileThemeMenu) {
            const timeout = setTimeout(() => setDelayedMobileThemeMenuStyles(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [mobileThemeMenu]);

    useEffect(() => {
        const closeMenu = () => {
            setMobileMenu(false);
            setMobileThemeMenu(false);
            document.body.style.overflow = 'auto';
        }
        window.addEventListener('resize', closeMenu);
        return () => {
            window.removeEventListener('resize', closeMenu);
        };
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

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <nav className='navbar'>
                <button onClick={handleLogoClick} className='navbar-section logo-button'>
                    <svg className='logo' style={changeNavbarColor()} >
                        <use href={`${iconsFile}#main-icon`}></use>
                    </svg>
                    <span style={changeNavbarColor()} >Fred&apos;s Portfolio</span>
                </button>
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
                                <div className='theme-submenu-item' onClick={() => toggleLightMode()}>
                                    <svg className={theme === 'light' ? 'active-mode' : ''}>
                                        <use href={`${iconsFile}#lightmode-icon`}></use>
                                    </svg>
                                    <li className={theme === 'light' ? 'active-mode' : ''}>Light</li>
                                </div>
                                <div className='theme-submenu-item' onClick={() => toggleDarkMode()}>
                                    <svg className={theme === 'dark' ? 'active-mode' : ''}>
                                        <use href={`${iconsFile}#darkmode-icon`}></use>
                                    </svg>
                                    <li className={theme === 'dark' ? 'active-mode' : ''}>Dark</li>
                                </div>
                                <div className='theme-submenu-item' onClick={() => toggleSystemMode()}>
                                    <svg className={theme === 'system' ? 'active-mode' : ''}>
                                        <use href={`${iconsFile}#systemmode-icon`}></use>
                                    </svg>
                                    <li className={theme === 'system' ? 'active-mode' : ''}>System</li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                    <button className='filled-button' onClick={() => (window.open('https://www.linkedin.com/in/frederico-silva-727a8b21a/', '_blank'))}>Hire Me!</button>
                </div>
                <div className='mobile-menu'>
                    <button className='filled-button' onClick={() => (window.open('https://www.linkedin.com/in/frederico-silva-727a8b21a/', '_blank'))}>Hire Me!</button>
                    <button className={`menu-button ${mobileMenu ? 'shrink' : ''}`} onClick={handleMobileMenuClick}>
                        <span style={changeNavbarColor(true)}></span>
                        <span style={changeNavbarColor(true)}></span>
                        <span style={changeNavbarColor(true)}></span>
                        <span style={changeNavbarColor(true)}></span>
                    </button>
                </div>
            </nav>
            {delayedMobileMenuStyles &&
                <div className={`mobile-menu-items ${mobileMenu ? 'show' : 'hide'}`}>
                    <Link className='mobile-menu-link' to='/'>Home</Link>
                    <Link className='mobile-menu-link' to='/about'>About</Link>
                    <Link className='mobile-menu-link' to='/projects'>Projects</Link>
                    <Link className='mobile-menu-link' to='/contact'>Contact</Link>
                    <span className={`mobile-menu-link mobile-menu-theme ${mobileThemeMenu ? 'active' : ''}`} onClick={handleMobileThemeMenuClick}>Theme</span>
                    {delayedMobileThemeMenuStyles &&
                        <div className={mobileThemeMenu ? 'show-theme' : 'hide'}>
                            <div className='mobile-menu-theme-item' onClick={() => toggleLightMode()}>
                                <svg className={theme === 'light' ? 'active-mode' : ''}>
                                    <use href={`${iconsFile}#lightmode-icon`}></use>
                                </svg>
                                <span className={theme === 'light' ? 'active-mode' : ''}>Light</span>
                            </div>
                            <div className='mobile-menu-theme-item' onClick={() => toggleDarkMode()}>
                                <svg className={theme === 'dark' ? 'active-mode' : ''}>
                                    <use href={`${iconsFile}#darkmode-icon`}></use>
                                </svg>
                                <span className={theme === 'dark' ? 'active-mode' : ''}>Dark</span>
                            </div>
                            <div className='mobile-menu-theme-item' onClick={() => toggleSystemMode()}>
                                <svg className={theme === 'system' ? 'active-mode' : ''}>
                                    <use href={`${iconsFile}#systemmode-icon`}></use>
                                </svg>
                                <span className={theme === 'system' ? 'active-mode' : ''}>System</span>
                            </div>
                        </div>
                    }
                </div>
            }
        </header>
    )
}

Navbar.propTypes = {
    activeLink: PropTypes.string
};

export default Navbar