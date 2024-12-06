import './MyResumeSection.css'
import PropTypes from 'prop-types';
import { useRef, useEffect, useState, useCallback } from 'react';
import OutlineButton from '../../sub-components/OutlineButton/OutlineButton';
import useDownloadCV from '../../../hooks/useDownloadCV.jsx';
import ResumeCard from '../../sub-components/ResumeCard/ResumeCard';
import { education, work } from '../../../assets/data.js';
import ScrollAnimation from 'react-animate-on-scroll';

function MyProjectsSection(props) {
    const firstEducationCardRef = useRef(null);
    const lastEducationCardRef = useRef(null);
    const [educationBarHeight, setEducationBarHeight] = useState(0);
    const firstWorkCardRef = useRef(null);
    const lastWorkCardRef = useRef(null);
    const [workBarHeight, setWorkBarHeight] = useState(0);
    const downloadCV = useDownloadCV();

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const calculateHeights = useCallback(() => {
        try {
            if (firstEducationCardRef.current && lastEducationCardRef.current) {
                const firstEducationRect = firstEducationCardRef.current.getBoundingClientRect();
                const lastEducationRect = lastEducationCardRef.current.getBoundingClientRect();
                const educationHeight = lastEducationRect.top + window.scrollY - (firstEducationRect.top + window.scrollY);
                setEducationBarHeight(educationHeight);
            }

            if (firstWorkCardRef.current && lastWorkCardRef.current) {
                const firstWorkRect = firstWorkCardRef.current.getBoundingClientRect();
                const lastWorkRect = lastWorkCardRef.current.getBoundingClientRect();
                const workHeight = lastWorkRect.top + window.scrollY - (firstWorkRect.top + window.scrollY);
                setWorkBarHeight(workHeight);
            }
        } catch (error) {
            console.error('Error calculating heights:', error);
        }
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            calculateHeights();
        });

        const elements = [
            firstEducationCardRef.current,
            lastEducationCardRef.current,
            firstWorkCardRef.current,
            lastWorkCardRef.current
        ].filter(Boolean);

        elements.forEach(element => resizeObserver.observe(element));

        return () => {
            resizeObserver.disconnect();
        };
    }, [calculateHeights]);

    return (
        <section style={backgroundColor} className='my-resume-container'>
            <div className='my-resume-inner-container'>
                <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInUp' offset={20}>
                    <h2>My Resume</h2>
                </ScrollAnimation>
                <div className='resume-container'>
                    <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInLeft' offset={50} className='resume-small-container'>
                        <h3>Education</h3>
                        <div className='resume-data-container'
                            style={{ '--education-bar-height': `${educationBarHeight}px` }}>
                            {education.map((card, index) => (
                                <ResumeCard
                                    key={index}
                                    icon={card.icon}
                                    date={card.date}
                                    title={card.title}
                                    location={card.place}
                                    ref={index === 0 ? firstEducationCardRef : index === education.length - 1 ? lastEducationCardRef : null}
                                />
                            ))}
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInRight' offset={50} className='resume-small-container'>
                        <h3>Work Experience</h3>
                        <div className='resume-data-container'
                            style={{ '--work-bar-height': `${workBarHeight}px` }}>
                            {work.map((card, index) => (
                                <ResumeCard
                                    key={index}
                                    icon='work-icon'
                                    date={card.date}
                                    title={card.title}
                                    location={card.place}
                                    ref={index === 0 ? firstWorkCardRef : index === work.length - 1 ? lastWorkCardRef : null}
                                />
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInUp' offset={20} style={{ width: 'fit-content', margin: 'auto' }}>
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
                </ScrollAnimation>

            </div>
        </section>
    )
}

MyProjectsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default MyProjectsSection