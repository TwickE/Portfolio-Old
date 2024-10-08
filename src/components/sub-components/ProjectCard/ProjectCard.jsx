import './ProjectCard.css'
import PropTypes from 'prop-types';
import OutlineButton from '../OutlineButton/OutlineButton';
import iconsFile from '../../../assets/icons.svg'

function ProjectCard({ cardProps }) {
    return (
        <div className='card-container'>
            <object type="image/svg+xml" data={iconsFile} style={{display: 'none'}}></object>
            <h3>{cardProps.cardTitle}</h3>
            <p>{cardProps.cardDescription}</p>
            <div className='card-links-container'>
                <OutlineButton
                    buttonProps={{
                        buttonSmall: true,
                        startImage: true,
                        startImageSrc: 'github-icon',
                        text: "GitHub",
                        endImage: true,
                        endImageSrc: 'arrow-icon',
                        clickFunction: () => window.open(cardProps.cardLinks[0].link)
                    }}
                ></OutlineButton>
                <OutlineButton
                    buttonProps={{
                        buttonSmall: true,
                        startImage: true,
                        startImageSrc: 'web-icon',
                        text: "Website",
                        endImage: true,
                        endImageSrc: 'arrow-icon',
                        clickFunction: () => window.open(cardProps.cardLinks[0].link)
                    }}
                ></OutlineButton>
                <OutlineButton
                    buttonProps={{
                        buttonSmall: true,
                        startImage: true,
                        startImageSrc: 'figma-outline-icon',
                        text: "Figma",
                        endImage: true,
                        endImageSrc: 'arrow-icon',
                        clickFunction: () => window.open(cardProps.cardLinks[0].link)
                    }}
                ></OutlineButton>
            </div>
            <div className='card-small-badges-container'>
                
            </div>
            <div className='card-images-conatiner'>
                <div className='card-images-selector'>

                </div>
                <img src={cardProps.images[0].image} alt={cardProps.images[0].imageDescription} />
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    cardProps: PropTypes.shape({
        cardTitle: PropTypes.string.isRequired,
        cardDescription: PropTypes.string.isRequired,
        cardLinks: PropTypes.arrayOf(PropTypes.shape({
            link: PropTypes.string.isRequired,
            linkText: PropTypes.string.isRequired
        })).isRequired,
        cardSmallBadges: PropTypes.arrayOf(PropTypes.shape({
            badgeName: PropTypes.string.isRequired,
            badgeImage: PropTypes.string.isRequired
        })).isRequired,
        images: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string.isRequired,
            imageDescription: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default ProjectCard