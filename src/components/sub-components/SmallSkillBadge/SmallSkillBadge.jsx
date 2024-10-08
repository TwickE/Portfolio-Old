import './SmallSkillbadge.css'
import PropTypes from 'prop-types';

function SmallSkillbadge(props) {
    return (
        <span className='small-skill-badge'>
            <img src={props.icon} alt={props.text} />
            <p>{props.text}</p>
        </span>
    )
}

SmallSkillbadge.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default SmallSkillbadge