import './SkillBadge.css'
import PropTypes from 'prop-types';

function SkillBadge(props) {
    return (
        <a href={props.skillLink} className='skill-badge' target='_blank'>
            <img src={props.skillImage} alt={`${props.skillName} Icon`} />
            <h3>{props.skillName}</h3>
        </a>
    )
}

SkillBadge.propTypes = {
    skillLink: PropTypes.string.isRequired,
    skillImage: PropTypes.string.isRequired,
    skillName: PropTypes.string.isRequired
};

export default SkillBadge