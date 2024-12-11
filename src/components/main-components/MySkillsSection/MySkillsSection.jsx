import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from '../../sub-components/SkillBadge/SkillBadge'
import { skills } from '../../../assets/data.js'
import { useRef, useCallback } from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'

function MySkillsSection(props) {
    const badgesContainerRef = useRef(null);

    const h2Ref = useRef(null);
    const h2Visible = useScrollAnimation(h2Ref, 20);
    const pRef = useRef(null);
    const pVisible = useScrollAnimation(pRef, 20);

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

    const handleMouseEnter = useCallback(() => {
        const badgesContainer = badgesContainerRef.current;
        if (badgesContainer) {
            badgesContainer.style.setProperty('--x', '-999px');
            badgesContainer.style.setProperty('--y', '-999px');
        }
    }, []);

    return (
        <section style={backgroundColor} className='my-skills-conatiner'>
            <div className='my-skills-inner-conatiner'>
                <div ref={h2Ref} className={h2Visible ? 'fadeInUp' : 'no-animation'}>
                    <h2>My Skills</h2>
                </div>
                <div ref={pRef} className={pVisible ? 'fadeInUp' : 'no-animation'}>
                    <p>I can put your ideas and thus your wishes in the form of a unique solution that can help you achieve your goals.</p>
                </div>
                <div className='badges-container' ref={badgesContainerRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} role='list' aria-label='Skills list'>
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