import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from '../../sub-components/SkillBadge/SkillBadge'
import { mainSkills, otherSkills } from '../../../assets/data.js'
import { useRef, useCallback } from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'

function MySkillsSection(props) {
    const badgesContainerMRef = useRef(null);
    const badgesContainerORef = useRef(null);

    const h2MRef = useRef(null);
    const h2MVisible = useScrollAnimation(h2MRef, 20);
    const h2ORef = useRef(null);
    const h2OVisible = useScrollAnimation(h2ORef, 20);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const handleMouseMove = useCallback((e) => {
        const badgesContainer = e.currentTarget;
        const rect = badgesContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        badgesContainer.style.setProperty('--x', `${x}px`);
        badgesContainer.style.setProperty('--y', `${y}px`);
    }, []);

    const handleMouseEnter = useCallback((e) => {
        const badgesContainer = e.currentTarget;
        if (badgesContainer) {
            badgesContainer.style.setProperty('--x', '-999px');
            badgesContainer.style.setProperty('--y', '-999px');
        }
    }, []);

    return (
        <section style={backgroundColor} className='my-skills-conatiner'>
            <div className='my-skills-inner-conatiner' onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove}>
                <div ref={h2MRef} className={h2MVisible ? 'fadeInUp' : 'no-animation'}>
                    <h2>My Main Skills</h2>
                </div>
                <div className='badges-container' ref={badgesContainerMRef} role='list' aria-label='Main Skills list'>
                    {mainSkills.map((skill, index) => (
                        <SkillBadge
                            key={index}
                            skillLink={skill.skillLink}
                            skillName={skill.skillName}
                            skillImage={skill.skillImage}
                            mainSkill={true}
                        />
                    ))}
                </div>
                <div ref={h2ORef} className={h2OVisible ? 'fadeInUp' : 'no-animation'}>
                    <h2>My Other Skills</h2>
                </div>
                <div className='badges-container' ref={badgesContainerORef} role='list' aria-label='Other Skills list'>
                    {otherSkills.map((skill, index) => (
                        <SkillBadge
                            key={index}
                            skillLink={skill.skillLink}
                            skillName={skill.skillName}
                            skillImage={skill.skillImage}
                            mainSkill={false}
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