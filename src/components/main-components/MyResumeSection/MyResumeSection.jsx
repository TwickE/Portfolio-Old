import './MyResumeSection.css'
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import OutlineButton from '../../sub-components/OutlineButton/OutlineButton';
import CV from '../../../assets/cv.pdf'
import ResumeCard from '../../sub-components/ResumeCard/ResumeCard';
import educationData from '../../../assets/education.json'
import workData from '../../../assets/work.json'

function MyProjectsSection(props) {
    const firstEducationCardRef = useRef(null);
    const lastEducationCardRef = useRef(null);
    const [educationBarHeight, setEducationBarHeight] = useState(0);
    const firstWorkCardRef = useRef(null);
    const lastWorkCardRef = useRef(null);
    const [workBarHeight, setWorkBarHeight] = useState(0);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    useEffect(() => {
        if (firstEducationCardRef.current && lastEducationCardRef.current) {
            const firstEducationCardRect = firstEducationCardRef.current.getBoundingClientRect();
            const lastEducationCardRect = lastEducationCardRef.current.getBoundingClientRect();
            const educationHeight = lastEducationCardRect.top + window.scrollY - (firstEducationCardRect.top + window.scrollY);
            setEducationBarHeight(educationHeight);
        }

        if (firstWorkCardRef.current && lastWorkCardRef.current) {
            const firstWorkCardRect = firstWorkCardRef.current.getBoundingClientRect();
            const lastWorkCardRect = lastWorkCardRef.current.getBoundingClientRect();
            const workHeight = lastWorkCardRect.top + window.scrollY - (firstWorkCardRect.top + window.scrollY);
            setWorkBarHeight(workHeight);
        }
    }, []);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section style={backgroundColor} className='my-resume-conatiner'>
            <div className='my-resume-inner-conatiner'>
                <h2>My Resume</h2>
                <div className='resume-conatiner'>
                    <div className='resume-small-container'>
                        <h3>Education</h3>
                        <div className='resume-data-container'
                        style={{ '--education-bar-height': `${educationBarHeight}px` }}>
                            {educationData.map((card, index) => (
                                <ResumeCard
                                    key={index}
                                    icon='education-icon'
                                    date={card.date}
                                    title={card.title}
                                    location={card.place}
                                    ref={index === 0 ? firstEducationCardRef : index === educationData.length - 1 ? lastEducationCardRef : null}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='resume-small-container'>
                        <h3>Work Experience</h3>
                        <div className='resume-data-container'
                        style={{ '--work-bar-height': `${workBarHeight}px` }}>
                            {workData.map((card, index) => (
                                <ResumeCard
                                    key={index}
                                    icon='work-icon'
                                    date={card.date}
                                    title={card.title}
                                    location={card.place}
                                    ref={index === 0 ? firstWorkCardRef : index === workData.length - 1 ? lastWorkCardRef : null}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <span style={{display: 'block', width: 'fit-content', margin: 'auto'}}>
                <OutlineButton
                    buttonProps={{
                        buttonSmall: false,
                        startImage: false,
                        text: 'Download CV',
                        endImage: true,
                        endImageSrc: 'download-icon',
                        clickFunction: downloadCV
                    }}
                />
                </span>
                
            </div>
        </section>
    )
}

MyProjectsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default MyProjectsSection