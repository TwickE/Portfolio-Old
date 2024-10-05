import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from './sub-components/SkillBadge'
import skillsJSON from '../assets/skills.json'
import { useEffect, useState } from 'react';

function MySkillsSection(props) {
    const [skills, setSkills] = useState([]);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = {};
            for (const skill of skillsJSON) {
                const imageModule = await import(`../assets/skills-images/${skill.skillImage}`);
                images[skill.skillImage] = imageModule.default;
            }
            setLoadedImages(images);
            setSkills(skillsJSON);
        };
        loadImages();
    }, []);

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