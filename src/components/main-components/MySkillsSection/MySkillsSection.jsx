import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from '../../sub-components/SkillBadge/SkillBadge'
import { skills } from '../../../assets/data.js'
import { useRef, useCallback } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function MySkillsSection(props) {
    const badgesContainerRef = useRef(null);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const handleMouseMove = useCallback((e) => {
        const badgesContainer = badgesContainerRef.current;
        const rect = badgesContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        badgesContainer.style.setProperty('--x', `${x}px`);
        badgesContainer.style.setProperty('--y', `${y}px`);
    }, []);

    return (
        <section style={backgroundColor} className='my-skills-conatiner'>
            <div className='my-skills-inner-conatiner'>
                <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInUp' offset={20}>
                    <h2>My Skills</h2>
                </ScrollAnimation>
                <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInUp' offset={20}>
                    <p>I can put your ideas and thus your wishes in the form of a unique solution that can help you achieve your goals.</p>
                </ScrollAnimation>
                <div className='badges-container' ref={badgesContainerRef} onMouseMove={handleMouseMove} role='list' aria-label='Skills list'>
                    {skills.map((skill, index) => (
                         <SkillBadge
                             key={index}
                             skillLink={skill.skillLink}
                             skillName={skill.skillName}
                             skillImage={skill.skillImage}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

MySkillsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default MySkillsSection;