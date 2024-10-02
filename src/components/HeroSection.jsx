import './HeroSection.css'
import OutlineButton from './sub-components/OutlineButton.jsx'
import CV from '../assets/CV.pdf'
import iconsFile from '../assets/icons.svg'

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
                    <button className='socil-button'>
                        <svg>
                            <use href={`${iconsFile}#linkedin-icon`}></use>
                        </svg>
                    </button>
                    <button className='socil-button'>
                        <svg>
                            <use href={`${iconsFile}#github-icon`}></use>
                        </svg>
                    </button>
                    <button className='socil-button'>
                        <svg>
                            <use href={`${iconsFile}#codepen-icon`}></use>
                        </svg>
                    </button>
                </div>
            </div>
        </main>
        
    )
}

export default HeroSection