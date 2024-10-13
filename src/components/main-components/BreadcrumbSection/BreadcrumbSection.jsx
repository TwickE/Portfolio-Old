import './BreadcrumbSection.css'
import PropTypes from 'prop-types';
import backgroundImage from '../../../assets/breadcrumbBackground.webp'
import { Link } from 'react-router-dom';
import iconsFile from '../../../assets/icons.svg'

function BreadcrumbSection(props) {
    const breadcrumbBackgroundImage = {
        backgroundImage: `url(${backgroundImage})`
    }

    return (
        <section style={breadcrumbBackgroundImage} className='breadcrumb-container'>
            <h1>{props.location}</h1>
            <div className='breadcrumb-path-container'>
                <Link className='breadcrumb-link' to='/'>Home</Link>
                <svg>
                    <use href={`${iconsFile}#arrow-icon`}></use>
                </svg>
                <span>{props.location}</span>
            </div>
        </section>
    )
}

BreadcrumbSection.propTypes = {
    location: PropTypes.string.isRequired
};

export default BreadcrumbSection;