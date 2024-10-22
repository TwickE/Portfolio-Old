import './GoUp.css'
import iconsFile from '../../../assets/icons.svg'
import React from 'react'

function GoUp() {
    const [fillAmount, setFillAmount] = React.useState('0')
    const [maxFillAmount] = React.useState('307.919')

    const updateFillAmount = React.useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollableHeight = docHeight - winHeight;
        const scrollPercentage = scrollTop / scrollableHeight;
        const newFillAmount = scrollPercentage * maxFillAmount;
        setFillAmount(newFillAmount);
    }, [maxFillAmount]);

    React.useEffect(() => {
        window.addEventListener('scroll', updateFillAmount);
        return () => {
            window.removeEventListener('scroll', updateFillAmount);
        };
    }, [updateFillAmount]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className={`go-up-container ${fillAmount > 0 ? 'active-progress' : ''}`} onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ strokeDasharray: maxFillAmount, strokeDashoffset: -fillAmount }}></path>
            </svg>
            <svg className='go-up-icon'>
                <use href={`${iconsFile}#arrow-icon`}></use>
            </svg>
        </button>
    )
}

export default GoUp