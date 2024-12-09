import './NotFoundSection.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'

const NotFoundSection = () => {
    const notFoundRef = useRef(null);
    const notFoundVisible = useScrollAnimation(notFoundRef, 0);

    const buttonRef = useRef(null)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className='not-found-section'>
            <div ref={notFoundRef} className={`container-not-found-info ${notFoundVisible ? 'zoomIn' : 'no-animation'}`}>
                <h1>404</h1>
                <h2>It seems that you are lost<br></br>This page doesn&apos;t exist</h2>
                <button className='filled-button' ref={buttonRef} onClick={handleClick}>Go Home</button>
            </div>
        </section>
    )
}

export default NotFoundSection