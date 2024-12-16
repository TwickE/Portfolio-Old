import './HeroSection.css'
import OutlineButton from '../../sub-components/OutlineButton/OutlineButton.jsx'
import useDownloadCV from '../../../hooks/useDownloadCV.jsx'
import iconsFile from '../../../assets/icons.svg'
import profilePhoto from '../../../assets/profilePhoto.webp'
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'
import { useRef } from 'react';

function HeroSection() {
    const downloadCV = useDownloadCV();

    const photoRef = useRef(null);
    const photoVisible = useScrollAnimation(photoRef, 0);
    const infoRef = useRef(null);
    const infoVisible = useScrollAnimation(infoRef, 0);

    return (
        <main className="hero-section">
            <div ref={infoRef} className={`container-info ${infoVisible ? 'fadeInLeft' : 'no-animation'}`}>
                <h2>Hi, I am Fred</h2>
                <h1>A Full Stack Developer +<br></br>UX Designer</h1>
                <div className='container-photo-small'>
                    <img className='profile-photo' src={profilePhoto} alt="Profile Photo" loading='lazy' decoding='async'/>
                </div>
                <p>I&rsquo;m a technology enthusiast with a focus on Web Development. I consider myself a curious individual, always eager to learn new things.</p>
                <div className='container-buttons'>
                    <OutlineButton
                        buttonProps = {{
                            buttonSmall: false,
                            startImage: false,
                            text: 'Download CV',
                            endImage: true,
                            endImageSrc: 'download-icon',
                            clickFunction: downloadCV
                        }}
                    />
                    <div className='container-buttons'>
                        <a className='social-button' style={{marginLeft: "5px"}} href='https://www.linkedin.com/in/frederico-silva-727a8b21a/' target='_blank' aria-label="Visit LinkedIn profile">
                            <svg>
                                <use href={`${iconsFile}#linkedin-icon`}></use>
                            </svg>
                        </a>
                        <a className='social-button' href='https://github.com/TwickE' target='_blank' aria-label="Visit GitHub profile">
                            <svg>
                                <use href={`${iconsFile}#github-icon`}></use>
                            </svg>
                        </a>
                        <a className='social-button' href='https://codepen.io/TwickE' target='_blank' aria-label="Visit Codepen profile">
                            <svg>
                                <use href={`${iconsFile}#codepen-icon`}></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div ref={photoRef} className={`container-photo ${photoVisible ? 'fadeInRight' : 'no-animation'}`}>
                <img className='profile-photo' src={profilePhoto} alt="Profile Photo" loading='lazy' decoding='async'/>
            </div>
        </main>
        
    )
}

export default HeroSection