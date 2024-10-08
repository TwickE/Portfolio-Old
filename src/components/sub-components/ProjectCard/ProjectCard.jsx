import './ProjectCard.css'
import PropTypes from 'prop-types';
import OutlineButton from '../OutlineButton/OutlineButton';
import iconsFile from '../../../assets/icons.svg'
import SmallSkillbadge from '../SmallSkillBadge/SmallSkillBadge';
import useLoadBadgeImages from '../../../hooks/useLoadBadgeImages';
import { useState } from 'react';

function ProjectCard({ cardProps }) {
    const badgeImages = useLoadBadgeImages(cardProps.cardSmallBadges);
    const [selectedImage, setSelectedImage] = useState({
        image: cardProps.cardImages[0].image,
        imageDescription: cardProps.cardImages[0].imageDescription
    });

    const handleImageClick = (image, imageDescription) => {
        setSelectedImage({ image, imageDescription });
    };

    return (
        <div className='card-container'>
            <object type="image/svg+xml" data={iconsFile} style={{display: 'none'}}></object>
            <h3>{cardProps.cardTitle}</h3>
            <p>{cardProps.cardDescription}</p>
            <div className='card-links-container'>
                {cardProps.cardLinks.map((link, index) => (
                    <OutlineButton
                        key={index}
                        buttonProps={{
                            buttonSmall: true,
                            startImage: true,
                            startImageSrc: link.linkImage,
                            text: link.linkTitle,
                            endImage: true,
                            endImageSrc: 'arrow-icon',
                            clickFunction: () => window.open(link.linkUrl)
                        }}
                    />
                ))}
            </div>
            <div className='card-small-badges-container'>
                {cardProps.cardSmallBadges.map((badge, index) => (
                    <SmallSkillbadge
                    key={index}
                    text = {badge.badgeTitle}
                    icon={badgeImages[badge.badgeTitle]}
                />
                ))}
            </div>
            <div className='card-images-conatiner'>
                <div className='card-images-selector'>
                    {cardProps.cardImages.map((image, index) => (
                        <img 
                            key={index}
                            src={image.image} 
                            alt={image.imageDescription}
                            className={selectedImage.image === image.image ? 'selected-image-border' : ''}
                            onClick={() => handleImageClick(image.image)}
                        />
                    ))}
                </div>
                <img className='selected-image' src={selectedImage.image} alt={selectedImage.imageDescription} />
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    cardProps: PropTypes.shape({
        cardTitle: PropTypes.string.isRequired,
        cardDescription: PropTypes.string.isRequired,
        cardLinks: PropTypes.arrayOf(PropTypes.shape({
            linkTitle: PropTypes.string.isRequired,
            linkImage: PropTypes.string.isRequired,
            linkUrl: PropTypes.string.isRequired
        })).isRequired,
        cardSmallBadges: PropTypes.arrayOf(PropTypes.shape({
            badgeTitle: PropTypes.string.isRequired,
            badgeImage: PropTypes.string.isRequired
        })).isRequired,
        cardImages: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string.isRequired,
            imageDescription: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default ProjectCard