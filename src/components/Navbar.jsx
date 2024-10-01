import './Navbar.css'
import FilledButton from './sub-components/FilledButton'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Navbar(props) {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const mobileMenuItemsStyles = {
        height: isMenuActive ?'calc(100dvh - 100px)' : '',
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

    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <nav className='navbar'>
                    <div className='navbar-section'>
                        <Link to='/'>
                            <svg className='logo' width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M1.55277 34.42L10.6608 25.036C11.6421 24.0547 12.7461 23.564 13.9728 23.564C14.4328 23.564 14.8774 23.702 15.3068 23.978C15.7668 24.254 16.0888 24.6527 16.2728 25.174L14.5708 26.83L7.80877 33.822L12.0868 39.572C12.4548 40.032 12.6388 40.5227 12.6388 41.044C12.6388 41.5347 12.5621 41.9947 12.4088 42.424C12.2554 42.8227 12.0101 43.1907 11.6728 43.528C10.9981 44.2947 10.0321 44.7087 8.77477 44.77L1.55277 34.42ZM23.7629 51.854C23.7629 51.302 23.9009 50.6273 24.1769 49.83L39.2189 8.292C39.7709 8.2 40.5835 8.154 41.6569 8.154C42.7609 8.154 43.6349 8.30733 44.2789 8.614C44.9535 8.89 45.2909 9.47266 45.2909 10.362C45.2909 11.1287 45.0455 12.2173 44.5549 13.628L29.9269 54.016C29.6815 54.1387 28.8382 54.2 27.3969 54.2C24.9742 54.2 23.7629 53.418 23.7629 51.854ZM42.2646 43.114L45.3006 40.124L50.7286 34.466L47.6926 30.372C47.2326 29.7893 46.8186 29.2527 46.4506 28.762C46.0826 28.2713 45.8986 27.7807 45.8986 27.29C45.8986 26.7993 45.9752 26.3393 46.1286 25.91C46.2819 25.4807 46.5272 25.0973 46.8646 24.76C47.5699 23.9933 48.5359 23.5793 49.7626 23.518L56.9846 33.868L47.8766 43.252C46.8952 44.2333 45.7912 44.724 44.5646 44.724C44.1046 44.724 43.6446 44.586 43.1846 44.31C42.7552 44.034 42.4486 43.6353 42.2646 43.114Z" />
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
                                        <svg className={theme === 'light' ? 'active-mode' : ''} width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M12 15.5C12.9667 15.5 13.7917 15.1583 14.475 14.475C15.1583 13.7917 15.5 12.9667 15.5 12C15.5 11.0333 15.1583 10.2083 14.475 9.525C13.7917 8.84167 12.9667 8.5 12 8.5C11.0333 8.5 10.2083 8.84167 9.525 9.525C8.84167 10.2083 8.5 11.0333 8.5 12C8.5 12.9667 8.84167 13.7917 9.525 14.475C10.2083 15.1583 11.0333 15.5 12 15.5ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H4.25C4.46667 11.25 4.64583 11.3208 4.7875 11.4625C4.92917 11.6042 5 11.7833 5 12C5 12.2167 4.92917 12.3958 4.7875 12.5375C4.64583 12.6792 4.46667 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5333 12.75 19.3542 12.6792 19.2125 12.5375C19.0708 12.3958 19 12.2167 19 12C19 11.7833 19.0708 11.6042 19.2125 11.4625C19.3542 11.3208 19.5333 11.25 19.75 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H19.75ZM12 5C11.7833 5 11.6042 4.92917 11.4625 4.7875C11.3208 4.64583 11.25 4.46667 11.25 4.25V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V4.25C12.75 4.46667 12.6792 4.64583 12.5375 4.7875C12.3958 4.92917 12.2167 5 12 5ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V19.75C11.25 19.5333 11.3208 19.3542 11.4625 19.2125C11.6042 19.0708 11.7833 19 12 19C12.2167 19 12.3958 19.0708 12.5375 19.2125C12.6792 19.3542 12.75 19.5333 12.75 19.75V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35417 5.32083 4.3625 5.1125C4.37083 4.90417 4.44167 4.725 4.575 4.575C4.725 4.425 4.90417 4.35 5.1125 4.35C5.32083 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89167 7.05 7.025C6.91667 7.175 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6708 16.75 17.4625C16.75 17.2542 16.825 17.0833 16.975 16.95C17.1083 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6458 18.6792 19.6375 18.8875C19.6292 19.0958 19.5583 19.275 19.425 19.425C19.275 19.575 19.0958 19.65 18.8875 19.65C18.6792 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.6792 4.35417 18.8875 4.3625C19.0958 4.37083 19.275 4.44167 19.425 4.575C19.575 4.725 19.65 4.90417 19.65 5.1125C19.65 5.32083 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.6958 7.25 17.4875 7.25C17.2792 7.25 17.1 7.18333 16.95 7.05ZM4.575 19.425C4.425 19.275 4.35 19.0958 4.35 18.8875C4.35 18.6792 4.425 18.5 4.575 18.35L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.32083 19.6458 5.1125 19.6375C4.90417 19.6292 4.725 19.5583 4.575 19.425Z" />
                                        </svg>
                                        <li className={theme === 'light' ? 'active-mode' : ''}>Light</li>
                                    </div>
                                    <div className='theme-submenu-item' onClick={toggleTheme}>
                                        <svg className={theme === 'dark' ? 'active-mode' : ''} width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M12 21.0001C9.5 21.0001 7.375 20.1251 5.625 18.3751C3.875 16.6251 3 14.5001 3 12.0001C3 9.75011 3.6625 7.84178 4.9875 6.27511C6.3125 4.70844 8.05 3.70011 10.2 3.25011C10.8833 3.11678 11.35 3.23344 11.6 3.60011C11.85 3.96678 11.8417 4.46678 11.575 5.10011C11.425 5.48344 11.3083 5.87511 11.225 6.27511C11.1417 6.67511 11.1 7.08344 11.1 7.50011C11.1 9.00011 11.625 10.2751 12.675 11.3251C13.725 12.3751 15 12.9001 16.5 12.9001C16.9167 12.9001 17.3208 12.8626 17.7125 12.7876C18.1042 12.7126 18.4833 12.6084 18.85 12.4751C19.5667 12.2084 20.1 12.2209 20.45 12.5126C20.8 12.8043 20.8917 13.3001 20.725 14.0001C20.275 16.0168 19.2667 17.6876 17.7 19.0126C16.1333 20.3376 14.2333 21.0001 12 21.0001ZM12 19.5001C13.8167 19.5001 15.4 18.9376 16.75 17.8126C18.1 16.6876 18.9417 15.3668 19.275 13.8501C18.8583 14.0334 18.4125 14.1709 17.9375 14.2626C17.4625 14.3543 16.9833 14.4001 16.5 14.4001C14.5833 14.4001 12.9542 13.7293 11.6125 12.3876C10.2708 11.0459 9.6 9.41678 9.6 7.50011C9.6 7.10011 9.64167 6.67094 9.725 6.21261C9.80833 5.75428 9.95833 5.23344 10.175 4.65011C8.54167 5.10011 7.1875 6.01261 6.1125 7.38761C5.0375 8.76261 4.5 10.3001 4.5 12.0001C4.5 14.0834 5.22917 15.8543 6.6875 17.3126C8.14583 18.7709 9.91667 19.5001 12 19.5001Z" />
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
                            <span style={{ height: '3px' }}></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </header>
            <div style={mobileMenuItemsStyles} className='mobile-menu-items'>
                    <Link style={{ display: isMenuActive ? 'block' : 'none'}} className='' to='/'>Home</Link>
                    <Link style={{ display: isMenuActive ? 'block' : 'none'}} className='' to='/about'>About</Link>
                    <Link style={{ display: isMenuActive ? 'block' : 'none'}} className='' to='/projects'>Projects</Link>
                    <Link style={{ display: isMenuActive ? 'block' : 'none'}} className='' to='/contact'>Contact</Link>
                    <Link style={{ display: isMenuActive ? 'block' : 'none'}} className='' to='/theme'>Theme</Link>
            </div>
        </>
    )
}

Navbar.propTypes = {
    activeLink: PropTypes.string.isRequired
};

export default Navbar