import './HeroSection.css'
import OutlineButton from './sub-components/OutlineButton.jsx'

function HeroSection() {
    return (
        <main className="hero-section">
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
                            endImageSrc: 'download-icon'
                        }}
                    />
                </div>
            </div>
        </main>
        
    )
}

export default HeroSection