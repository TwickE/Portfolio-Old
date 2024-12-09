import './SkillBadge.css'
import PropTypes from 'prop-types';
import { forwardRef, useRef } from 'react';
import skillsImages from '../../../assets/skills-images.svg';
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'

const SkillBadge = forwardRef((props, ref) => {
    const skillRef = useRef(null);
    const skillVisible = useScrollAnimation(skillRef, 100);

    return (
        <div ref={skillRef} className={skillVisible ? 'fadeInLeft' : 'no-animation'}>
            <a href={props.skillLink} className='skill-badge' target='_blank' ref={ref} aria-label={`${props.skillName} skill`}>
                <svg>
                    <use href={`${skillsImages}#${props.skillImage}`}></use>
                </svg>
                <h3>{props.skillName}</h3>
            </a>
        </div>
    )
});

SkillBadge.displayName = 'SkillBadge';

SkillBadge.propTypes = {
    skillLink: PropTypes.string.isRequired,
    skillImage: PropTypes.string.isRequired,
    skillName: PropTypes.string.isRequired
};

export default SkillBadge