import './BreadcrumbSection.css'
import PropTypes from 'prop-types';
import backgroundImage from '../../../assets/breadcrumbBackground.webp'
import { Link } from 'react-router-dom';
import iconsFile from '../../../assets/icons.svg'
import { useEffect, useRef, useState } from 'react';

function BreadcrumbSection(props) {
    const breadcrumbBackgroundImage = {
        backgroundImage: `url(${backgroundImage})`
    }
    const breadcrumbRef = useRef(null);
    const [breadcrumbHeight, setBreadcrumbHeight] = useState(0);

    const updateBreadcrumbHeight = () => {
        if (breadcrumbRef.current) {
            const { height } = breadcrumbRef.current.getBoundingClientRect();
            setBreadcrumbHeight(height - 100);
        }
    };

    useEffect(() => {
        updateBreadcrumbHeight();
        window.addEventListener('resize', updateBreadcrumbHeight);

        return () => {
            window.removeEventListener('resize', updateBreadcrumbHeight);
        };
    }, []);

    return (
        <>
            <section ref={breadcrumbRef} style={breadcrumbBackgroundImage} className='breadcrumb-container'>
                <h1>{props.location}</h1>
                <div className='breadcrumb-path-container'>
                    <Link className='breadcrumb-link' to='/'>Home</Link>
                    <svg>
                        <use href={`${iconsFile}#arrow-icon`}></use>
                    </svg>
                    <span>{props.location}</span>
                </div>
            </section>
            <span style={{ height: `${breadcrumbHeight}px`, display: 'block' }}></span>
        </>
    )
}

BreadcrumbSection.propTypes = {
    location: PropTypes.string.isRequired
};

export default BreadcrumbSection;