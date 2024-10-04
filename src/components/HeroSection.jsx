import './HeroSection.css'
import OutlineButton from './sub-components/OutlineButton.jsx'
import CV from '../assets/CV.pdf'
import iconsFile from '../assets/icons.svg'
import profilePhoto from '../assets/profilePhoto.webp'

function HeroSection() {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <main className="hero-section">
            <object type="image/svg+xml" data={iconsFile} style={{display: 'none'}}></object>
            <div className='container-info'>
                <h2>Hi, I am fred.</h2>
                <h1>A Full Stack Developer +<br></br>UX Designer</h1>
                <div className='container-photo-small'>
                    <img className='profile-photo' src={profilePhoto} alt="Profile Photo"/>
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
                    <a className='social-button' style={{marginLeft: "5px"}} href='https://www.linkedin.com/in/frederico-silva-727a8b21a/' target='_blank'>
                        <svg>
                            <use href={`${iconsFile}#linkedin-icon`}></use>
                        </svg>
                    </a>
                    <a className='social-button' href='https://github.com/TwickE' target='_blank'>
                        <svg>
                            <use href={`${iconsFile}#github-icon`}></use>
                        </svg>
                    </a>
                    <a className='social-button' href='https://codepen.io/TwickE' target='_blank'>
                        <svg>
                            <use href={`${iconsFile}#codepen-icon`}></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='container-photo'>
                <img className='profile-photo' src={profilePhoto} alt="Profile Photo"/>
            </div>
        </main>
        
    )
}

export default HeroSection