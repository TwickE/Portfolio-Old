import './MySkillsSection.css'
import PropTypes from 'prop-types';
import SkillBadge from './sub-components/SkillBadge'
import skillsJSON from '../assets/skills.json'
import useLoadImages from '../hooks/useLoadImages'
import { useRef, useEffect } from 'react';

function MySkillsSection(props) {
    const { skills, loadedImages } = useLoadImages(skillsJSON);
    const badgesContainerRef = useRef(null);
    const skillBadgeRefs = useRef([]);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

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
    
    useEffect(() => {
        skillBadgeRefs.current = skillBadgeRefs.current.slice(0, skills.length);
    }, [skills]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target.classList.contains('skill-badge')) {
                    entry.target.classList.toggle('badge-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('badge-animationOff', !entry.isIntersecting);
                } else if (entry.target === titleRef.current || entry.target === descriptionRef.current) {
                    entry.target.classList.toggle('text-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('text-animationOff', !entry.isIntersecting);
                }
            });
        });

        const currentSkillBadgeRefs = skillBadgeRefs.current;
        const titleElement = titleRef.current;
        const descriptionElement = descriptionRef.current;

        currentSkillBadgeRefs.forEach((skillBadge) => {
            if (skillBadge) {
                observer.observe(skillBadge);
            }
        });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }

        return () => {
            currentSkillBadgeRefs.forEach((skillBadge) => {
                if (skillBadge) {
                    observer.unobserve(skillBadge);
                }
            });
            if (titleElement) {
                observer.unobserve(titleElement);
            }
            if (descriptionElement) {
                observer.unobserve(descriptionElement);
            }
        };
    }, [skills]);

    return (
        <section style={backgroundColor} className='my-skills-conatiner'>
            <div className='my-skills-inner-conatiner'>
                <h2 ref={titleRef}>My Skills</h2>
                <p ref={descriptionRef}>I can put your ideas and thus your wishes in the form of a unique solution that can help you achive your goals.</p>
                <div className='badges-container' ref={badgesContainerRef} onMouseMove={handleMouseMove}>
                    {skills.map((skill, index) => (
                        <SkillBadge
                            key={index}
                            skillLink={skill.skillLink}
                            skillName={skill.skillName}
                            skillImage={loadedImages[skill.skillImage]}
                            ref={(el) => skillBadgeRefs.current[index] = el}
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