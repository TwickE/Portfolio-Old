import './GoUp.css'
import iconsFile from '../../../assets/icons.svg'
import { useCallback, useEffect, useState } from 'react'

function GoUp() {
    const [fillAmount, setFillAmount] = useState(0)
    const maxFillAmount = 307.919;

    const updateFillAmount = useCallback(() => {
        try {
            const docHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
            const winHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            const scrollableHeight = docHeight - winHeight;
            const scrollPercentage = scrollTop / scrollableHeight;
            const newFillAmount = scrollPercentage * maxFillAmount;
            setFillAmount(newFillAmount);
        } catch (error) {
            console.error('Error updating fill amount:', error);
        }
    }, [maxFillAmount]);

    useEffect(() => {
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