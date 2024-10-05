import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from './sub-components/SkillBadge'
import skillsJSON from '../assets/skills.json'
import useLoadImages from '../hooks/useLoadImages'

function MySkillsSection(props) {
    const { skills, loadedImages } = useLoadImages(skillsJSON);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    return (
        <section style={backgroundColor} className='my-skills-conatiner'>
            <div className='my-skills-inner-conatiner'>
                <h2>My Skills</h2>
                <p>I can put your ideas and thus your wishes in the form of a unique solution that can help you achive your goals.</p>
                <div className='badges-conatiner'>
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