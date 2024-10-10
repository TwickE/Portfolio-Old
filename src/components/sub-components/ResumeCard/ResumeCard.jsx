import './ResumeCard.css'
import PropTypes from 'prop-types';
import iconsFile from '../../../assets/icons.svg'
import { forwardRef } from 'react';

const ResumeCard = forwardRef((props, ref) => {
    return (
        <div className='resume-card'>
            <object type="image/svg+xml" data={iconsFile} style={{display: 'none'}}></object>
            <span className='resume-card-icon' ref={ref}>
                <svg>
                    <use href={`${iconsFile}#${props.icon}`}></use>
                </svg>
            </span>
            <div className='resume-card-text'>
                <h5>{props.date}</h5>
                <h4>{props.title}</h4>
                <h6>{props.location}</h6>
            </div>
        </div>
    )
});

ResumeCard.displayName = 'ResumeCard';

ResumeCard.propTypes = {
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};

export default ResumeCard