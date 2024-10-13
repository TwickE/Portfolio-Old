import './Footer.css'
import iconsFile from '../../../assets/icons.svg'
import { Link } from 'react-router-dom'
import ReactImage from '../../../assets/skills-images/react-icon.webp'

function Footer() {
    return (
        <footer className='footer-container'>
            <object type="image/svg+xml" data={iconsFile} style={{ display: 'none' }}></object>
            <div className='footer-inner-container'>
                <Link className='footer-navlink' to='/'>
                    <svg className='footer-main-icon'>
                        <use href={`${iconsFile}#main-icon`}></use>
                    </svg>
                </Link>
                <div className='footer-navlink-container'>
                    <Link className='footer-navlink' to='/'>Home</Link>
                    <Link className='footer-navlink' to='/about'>About</Link>
                    <Link className='footer-navlink' to='/projects'>Projects</Link>
                    <Link className='footer-navlink' to='/contact'>Contact</Link>
                </div>
                <div className='footer-credits'>
                    <img className='footer-react-icon' src={ReactImage} alt="React Icon" />
                    <p>Made with React JS</p>
                    <p>© 2024 All rights reserved by Frederico Silva</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer