import './SmallSkillBadge.css'
import PropTypes from 'prop-types';
import skillsImages from '../../../assets/skills-images.svg';

function SmallSkillBadge(props) {
    return (
        <div className="small-skill-badge">
            <svg>
                <use href={`${skillsImages}#${props.icon}`}></use>
            </svg>
            <span className="small-skill-badge-text">{props.text}</span>
        </div>
    );
}

SmallSkillBadge.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default SmallSkillBadge