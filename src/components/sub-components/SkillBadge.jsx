import './SkillBadge.css'
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const SkillBadge = forwardRef((props, ref) => {
    return (
        <a href={props.skillLink} className='skill-badge' target='_blank' ref={ref}>
            <img src={props.skillImage} alt={`${props.skillName} Icon`} />
            <h3>{props.skillName}</h3>
        </a>
    )
});

SkillBadge.displayName = 'SkillBadge';

SkillBadge.propTypes = {
    skillLink: PropTypes.string.isRequired,
    skillImage: PropTypes.string.isRequired,
    skillName: PropTypes.string.isRequired
};

export default SkillBadge