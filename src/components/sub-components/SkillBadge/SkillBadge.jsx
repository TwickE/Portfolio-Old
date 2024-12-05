import './SkillBadge.css'
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import skillsImages from '../../../assets/skills-images.svg';

const SkillBadge = forwardRef((props, ref) => {
    return (
        <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInLeft' offset={50}>
            <a href={props.skillLink} className='skill-badge' target='_blank' ref={ref}>
                <svg>
                    <use href={`${skillsImages}#${props.skillImage}`}></use>
                </svg>
                <h3>{props.skillName}</h3>
            </a>
        </ScrollAnimation>
    )
});

SkillBadge.displayName = 'SkillBadge';

SkillBadge.propTypes = {
    skillLink: PropTypes.string.isRequired,
    skillImage: PropTypes.string,
    skillName: PropTypes.string.isRequired
};

export default SkillBadge