import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from '../../sub-components/SkillBadge/SkillBadge'
import skillsJSON from '../../../assets/json/skills.json'
import useLoadImages from '../../../hooks/useLoadImages'
import { useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function MySkillsSection(props) {
    const { skills, loadedImages } = useLoadImages(skillsJSON);
    const badgesContainerRef = useRef(null);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const handleMouseMove = (e) => {
        const badgesContainer = badgesContainerRef.current;
        const rect = badgesContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        badgesContainer.style.setProperty('--x', `${x}px`);
        badgesContainer.style.setProperty('--y', `${y}px`);
    }

    return (
        <section style={backgroundColor} className='my-skills-conatiner'>
            <div className='my-skills-inner-conatiner'>
                <ScrollAnimation animateIn='fadeInUp' offset={20}>
                    <h2>My Skills</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' offset={20}>
                    <p>I can put your ideas and thus your wishes in the form of a unique solution that can help you achive your goals.</p>
                </ScrollAnimation>
                <div className='badges-container' ref={badgesContainerRef} onMouseMove={handleMouseMove}>
                    {skills.map((skill, index) => (
                        <ScrollAnimation animateIn='fadeInLeft' key={index} offset={50}>
                            <SkillBadge
                                skillLink={skill.skillLink}
                                skillName={skill.skillName}
                                skillImage={loadedImages[skill.skillImage]}
                            />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}

MySkillsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default MySkillsSection