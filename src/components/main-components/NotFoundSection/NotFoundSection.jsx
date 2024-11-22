import './NotFoundSection.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const NotFoundSection = () => {
    const buttonRef = useRef(null)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className='not-found-section'>
            <ScrollAnimation animateIn='zoomIn' className='container-not-found-info'>
                <h1>404</h1>
                <h2>It seems that you are lost</h2>
                <button className='filled-button' ref={buttonRef} onClick={handleClick}>Go Home</button>
            </ScrollAnimation>
        </section>
    )
}

export default NotFoundSection