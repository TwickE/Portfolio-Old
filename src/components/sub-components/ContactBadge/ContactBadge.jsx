import './ContactBadge.css'
import PropTypes from 'prop-types';
import iconsFile from '../../../assets/icons.svg'
import ScrollAnimation from 'react-animate-on-scroll';

function ContactBadge(props) {
    return (
        <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInRight' offset={20}>
            <a className='contact-badge' href={props.link} target='_blank'>
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
        </ScrollAnimation>
    )
}

ContactBadge.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ContactBadge