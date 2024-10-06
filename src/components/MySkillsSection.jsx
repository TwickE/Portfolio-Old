import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from './sub-components/SkillBadge'
import skillsJSON from '../assets/skills.json'
import useLoadImages from '../hooks/useLoadImages'
import { useRef } from 'react';

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
                <h2>My Skills</h2>
                <p>I can put your ideas and thus your wishes in the form of a unique solution that can help you achive your goals.</p>
                <div className='badges-container' ref={badgesContainerRef} onMouseMove={handleMouseMove}>
                    {skills.map((skill, index) => (
                        <SkillBadge
                            key={index}
                            skillLink={skill.skillLink}
                            skillName={skill.skillName}
                            skillImage={loadedImages[skill.skillImage]}
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

export default MySkillsSection