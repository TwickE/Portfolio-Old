import './ContactBadge.css'
import PropTypes from 'prop-types';
import iconsFile from '../../../assets/icons.svg'
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'
import { useRef } from 'react';

function ContactBadge(props) {
    const contactRef = useRef(null);
    const contactVisible = useScrollAnimation(contactRef, 50);

    return (
        <div ref={contactRef} className={contactVisible ? 'fadeInRight' : 'no-animation'}>
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
        </div>
    )
}

ContactBadge.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ContactBadge