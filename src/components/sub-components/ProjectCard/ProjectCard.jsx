import './ProjectCard.css'
import PropTypes from 'prop-types';
import OutlineButton from '../OutlineButton/OutlineButton';
import SmallSkillBadge from '../SmallSkillBadge/SmallSkillBadge';
import { useState, forwardRef, useCallback, useEffect, useRef, useImperativeHandle } from 'react';
import Swal from 'sweetalert2'
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'
import Magnifier from "react-magnifier";
import { createRoot } from 'react-dom/client';

const ProjectCard = forwardRef(({ cardProps }, forwardedRef) => {
    const localRef = useRef(null);
    const ref = forwardedRef || localRef;
    const cardVisible = useScrollAnimation(ref, 200);

    useImperativeHandle(forwardedRef, () => ({
        scrollIntoView: () => ref.current?.scrollIntoView()
    }), [ref]);

    const [selectedImage, setSelectedImage] = useState({
        image: cardProps.cardImages[0]?.image || '',
        imageDescription: cardProps.cardImages[0]?.imageDescription || ''
    });

    useEffect(() => {
        cardProps.cardImages.forEach(img => {
            const image = new Image();
            image.src = img.image;
        });
    }, [cardProps.cardImages]);

    const handleImageClick = useCallback(async (image, imageDescription) => {
        const loadImage = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.src = image;
        });
        await loadImage;
        setSelectedImage({ image, imageDescription });
    }, []);

    const openImageModal = useCallback(async () => {
        try {
            document.body.style.overflow = 'hidden';
            
            await Swal.fire({
                imageUrl: selectedImage.image,
                imageAlt: selectedImage.imageDescription,
                width: 'fit-content',
                background: 'var(--background-color1)',
                showConfirmButton: false,
                showCloseButton: true,
                padding: '0',
                customClass: {
                    closeButton: 'close-button',
                    image: 'modal-image'
                },
                didOpen: () => {
                    const src = Swal.getImage().src;
                    const alt = Swal.getImage().alt;
                    Swal.getImage().remove();
    
                    const container = document.createElement('div');
                    Swal.getHtmlContainer().appendChild(container);
                    
                    const root = createRoot(container);
                    root.render(
                        <Magnifier
                            src={src}
                            mgShape="square"
                            className="modal-image"
                            alt={alt}
                            width="80dvw"
                            style={{ maxHeight: '80dvh' }}
                        />
                    );
                }
            });
        } catch (error) {
            console.error('Error opening modal:', error);
        } finally {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    return (
        <div ref={ref} className={`card-container ${cardVisible ? cardProps.cardAnimation : 'no-animation'}`}>
            <h3>{cardProps.cardTitle}</h3>
            <span>{cardProps.date}</span>
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
                    <SmallSkillBadge
                        key={index}
                        text={badge.badgeTitle}
                        icon={badge.badgeImage}
                    />
                ))}
            </div>
            <div className='card-images-container'>
                <div className='card-images-selector'>
                    {cardProps.cardImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.image}
                            alt={image.imageDescription}
                            className={selectedImage.image === image.image ? 'selected-image-border' : ''}
                            onClick={() => handleImageClick(image.image)}
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
                <img className='selected-image'
                    src={selectedImage.image}
                    alt={selectedImage.imageDescription}
                    onClick={() => openImageModal()}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>
    )
})

ProjectCard.displayName = 'ProjectCard';

ProjectCard.propTypes = {
    cardProps: PropTypes.shape({
        cardTitle: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
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
        })).isRequired,
        cardAnimation: PropTypes.string.isRequired
    }).isRequired
};

export default ProjectCard



/* import './ProjectCard.css'
import PropTypes from 'prop-types';
import OutlineButton from '../OutlineButton/OutlineButton';
import SmallSkillBadge from '../SmallSkillBadge/SmallSkillBadge';
import { useState, forwardRef, useCallback, useEffect, useRef, useImperativeHandle } from 'react';
import Swal from 'sweetalert2'
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'
import iconsFile from '../../../assets/icons.svg'

const ProjectCard = forwardRef(({ cardProps }, forwardedRef) => {
    const localRef = useRef(null);
    const ref = forwardedRef || localRef;
    const cardVisible = useScrollAnimation(ref, 200);

    useImperativeHandle(forwardedRef, () => ({
        scrollIntoView: () => ref.current?.scrollIntoView()
    }), [ref]);

    const [selectedImage, setSelectedImage] = useState({
        image: cardProps.cardImages[0]?.image || '',
        imageDescription: cardProps.cardImages[0]?.imageDescription || ''
    });

    useEffect(() => {
        cardProps.cardImages.forEach(img => {
            const image = new Image();
            image.src = img.image;
        });
    }, [cardProps.cardImages]);

    const handleImageClick = useCallback(async (image, imageDescription) => {
        const loadImage = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.src = image;
        });
        await loadImage;
        setSelectedImage({ image, imageDescription });
    }, []);

    const openImageModal = useCallback(async () => {
        try {
            document.body.style.overflow = 'hidden';

            console.log(Swal.getImage());
            console.log(Swal.getPopup());

            await Swal.fire({
                imageUrl: selectedImage.image,
                imageAlt: selectedImage.imageDescription,
                width: 'fit-content',
                background: 'var(--background-color1)',
                showConfirmButton: false,
                showCloseButton: true,
                padding: '0',
                customClass: {
                    closeButton: 'close-button',
                    image: 'modal-image'
                }
            });
        } catch (error) {
            console.error('Error opening modal:', error);
        } finally {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;

        // Calculate background position percentage
        const bgX = (x / width) * 100;
        const bgY = (y / height) * 100;

        setMagnifierPosition({
            x,
            y,
            backgroundPosition: `${bgX}% ${bgY}%`
        });
    };

    return (
        <div ref={ref} className={`card-container ${cardVisible ? cardProps.cardAnimation : 'no-animation'}`}>
            <h3>{cardProps.cardTitle}</h3>
            <span>{cardProps.date}</span>
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
                    <SmallSkillBadge
                        key={index}
                        text={badge.badgeTitle}
                        icon={badge.badgeImage}
                    />
                ))}
            </div>
            <div className='card-images-container'>
                <div className='card-images-selector'>
                    {cardProps.cardImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.image}
                            alt={image.imageDescription}
                            className={selectedImage.image === image.image ? 'selected-image-border' : ''}
                            onClick={() => handleImageClick(image.image)}
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
                <div className="selected-image-container">
                    <img className='selected-image'
                        src={selectedImage.image}
                        alt={selectedImage.imageDescription}
                        loading="lazy"
                        decoding="async"

                        onMouseEnter={() => setShowMagnifier(true)}
                        onMouseLeave={() => setShowMagnifier(false)}
                        onMouseMove={handleMouseMove}
                    />
                    <button className='full-screen-image' onClick={() => openImageModal()}>
                        <svg>
                            <use href={`${iconsFile}#fullscreen-icon`}></use>
                        </svg>
                    </button>
                    {showMagnifier && (
                        <div
                            className="magnifier"
                            style={{
                                left: `${magnifierPosition.x}px`,
                                top: `${magnifierPosition.y}px`,
                                backgroundImage: `url(${selectedImage.image})`,
                                backgroundPosition: magnifierPosition.backgroundPosition
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
})

ProjectCard.displayName = 'ProjectCard';

ProjectCard.propTypes = {
    cardProps: PropTypes.shape({
        cardTitle: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
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
        })).isRequired,
        cardAnimation: PropTypes.string.isRequired
    }).isRequired
};

export default ProjectCard */