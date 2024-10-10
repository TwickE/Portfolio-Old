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
    const titleRef = useRef(null);
    const educationRef = useRef(null);
    const workRef = useRef(null);
    const downloadCVRef = useRef(null);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const calculateHeights = () => {
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
    };

    useEffect(() => {
        calculateHeights();
        window.addEventListener('resize', calculateHeights);
        return () => {
            window.removeEventListener('resize', calculateHeights);
        };
    }, []);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === educationRef.current) {
                    entry.target.classList.toggle('left-card-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('left-card-animationOff', !entry.isIntersecting);
                } else if (entry.target === workRef.current) {
                    entry.target.classList.toggle('right-card-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('right-card-animationOff', !entry.isIntersecting);
                } else if (entry.target === titleRef.current) {
                    entry.target.classList.toggle('text-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('text-animationOff', !entry.isIntersecting);
                } else if (entry.target === downloadCVRef.current) {
                    entry.target.classList.toggle('text-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('text-animationOff', !entry.isIntersecting);
                }
            });
        });

        const titleElement = titleRef.current;
        const downloadCVElement = downloadCVRef.current;
        const educationElement = educationRef.current;
        const workElement = workRef.current;

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        if (downloadCVRef.current) {
            observer.observe(downloadCVRef.current);
        }
        if (educationRef.current) {
            observer.observe(educationRef.current);
        }
        if (workRef.current) {
            observer.observe(workRef.current);
        }

        return () => {
            if (titleElement) {
                observer.unobserve(titleElement);
            }
            if (downloadCVElement) {
                observer.unobserve(downloadCVElement);
            }
            if (educationElement) {
                observer.unobserve(educationElement);
            }
            if (workElement) {
                observer.unobserve(workElement);
            }
        };
    }, []);

    return (
        <section style={backgroundColor} className='my-resume-conatiner'>
            <div className='my-resume-inner-conatiner'>
                <h2 ref={titleRef}>My Resume</h2>
                <div className='resume-conatiner'>
                    <div className='resume-small-container' ref={educationRef}>
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
                    <div className='resume-small-container' ref={workRef}>
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
                <span style={{display: 'block', width: 'fit-content', margin: 'auto'}} ref={downloadCVRef}>
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