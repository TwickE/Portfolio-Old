import './NotFoundSection.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFoundSection = () => {
    const buttonRef = useRef(null)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className='not-found-section'>
            <div className='container-not-found-info'>
                <h1>404</h1>
                <h2>It seems that you are lost</h2>
                <button className='filled-button' ref={buttonRef} onClick={handleClick}>Go Home</button>
            </div>
        </section>
    )
}

export default NotFoundSection