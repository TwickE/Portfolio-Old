import './ContactBadge.css'
import PropTypes from 'prop-types';
import iconsFile from '../../../assets/icons.svg'

function ContactBadge(props) {
    return (
        <a className='contact-badge' href={props.link} target='_blank'>
            <object type="image/svg+xml" data={iconsFile} style={{ display: 'none' }}></object>
            <span>
                <svg>
                    <use href={`${iconsFile}#${props.icon}`}></use>
                </svg>
            </span>
            <div className='contact-badge-text-container'>
                <h6>{props.title}</h6>
                <h4>{props.text}</h4>
            </div>
        </a>
    )
}

ContactBadge.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ContactBadge