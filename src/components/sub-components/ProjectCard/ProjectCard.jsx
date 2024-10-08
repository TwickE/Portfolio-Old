import './ProjectCard.css'
import PropTypes from 'prop-types';

function ProjectCard(props) {
    return (
        <div className='card-container'>
            <h3>{props.cardTitle}</h3>
            <p>{props.cardDescription}</p>
            <div className='card-links-container'>

            </div>
            <div className='card-small-badges-container'>
                
            </div>
            <div className='card-images-conatiner'>
                <div className='card-images-selector'>

                </div>
                <img src={props.images[0]} alt={props.imagesDescription[0]} />
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    
};

export default ProjectCard