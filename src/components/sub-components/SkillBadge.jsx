import './SkillBadge.css'
import PropTypes from 'prop-types';

function SkillBadge(props) {
    return (
        <div className='skill-badge'>
            <img src={props.skillImage} alt={`${props.skillName} Icon`} />
            <h3>{props.skillName}</h3>
        </div>
    )
}

SkillBadge.propTypes = {
    skillImage: PropTypes.string.isRequired,
    skillName: PropTypes.string.isRequired
};

export default SkillBadge