import './SkillBadge.css'
import PropTypes from 'prop-types';

function SkillBadge(props) {
    return (
        <div className='SkillBadge'>
            <img src={props.skillImage} alt={`${props.skillName} Icon`} />
            <p>{props.skillName}</p>
        </div>
    )
}

SkillBadge.propTypes = {
    skillImage: PropTypes.string.isRequired,
    skillName: PropTypes.string.isRequired
};

export default SkillBadge