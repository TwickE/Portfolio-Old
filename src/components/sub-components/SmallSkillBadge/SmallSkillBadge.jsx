import './SmallSkillBadge.css'
import PropTypes from 'prop-types';

function SmallSkillBadge(props) {
    return (
        <div className="small-skill-badge">
            <img src={props.icon} alt={props.text} className="small-skill-badge-icon" />
            <span className="small-skill-badge-text">{props.text}</span>
        </div>
    );
}

SmallSkillBadge.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default SmallSkillBadge