import './MyProjectsSection.css'
import PropTypes from 'prop-types';
import { useRef,useEffect } from 'react';
import ProjectCard from '../../sub-components/ProjectCard/ProjectCard';
import cardsData from '../../../assets/json/cards.json'
import { useNavigate } from 'react-router-dom';

function MyProjectsSection(props) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const projectCardRefs = useRef([]);
    const navigate = useNavigate();
    const seeMoreButtonRef = useRef(null);

    const handleSeeMoreProjectsClick = () => {
        navigate('/projects');
    };

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const displayButton = () => {
        if (props.allProjects) {
            return {
                display: 'none',
                transition: '0.4s'
            }
        } else {
            return {
                transition: '0.4s'
            }
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = projectCardRefs.current.indexOf(entry.target);
                if (index !== -1) {
                    const isLeftCard = index % 2 === 0;
                    const animationClassOn = isLeftCard ? 'left-card-animationOn' : 'right-card-animationOn';
                    const animationClassOff = isLeftCard ? 'left-card-animationOff' : 'right-card-animationOff';

                    entry.target.classList.toggle(animationClassOn, entry.isIntersecting);
                    entry.target.classList.toggle(animationClassOff, !entry.isIntersecting);
                } else if (entry.target === titleRef.current || entry.target === descriptionRef.current) {
                    entry.target.classList.toggle('text-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('text-animationOff', !entry.isIntersecting);
                } else if (entry.target === seeMoreButtonRef.current) {
                    entry.target.classList.toggle('text-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('text-animationOff', !entry.isIntersecting);
                }
            });
        });

        const currentProjectCardRefs = projectCardRefs.current;
        const titleElement = titleRef.current;
        const descriptionElement = descriptionRef.current;
        const seeMoreButtonElement = seeMoreButtonRef.current;

        currentProjectCardRefs.forEach((projectCard) => {
            if (projectCard) {
                observer.observe(projectCard);
            }
        });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }
        if (seeMoreButtonRef.current) {
            observer.observe(seeMoreButtonRef.current);
        }

        return () => {
            currentProjectCardRefs.forEach((projectCard) => {
                if (projectCard) {
                    observer.unobserve(projectCard);
                }
            });
            if (titleElement) {
                observer.unobserve(titleElement);
            }
            if (descriptionElement) {
                observer.unobserve(descriptionElement);
            }
            if (seeMoreButtonElement) {
                observer.unobserve(seeMoreButtonElement);
            }
        };
    }, []);

    return (
        <section style={backgroundColor} className='my-projects-conatiner'>
            <div className='my-projects-inner-conatiner'>
                <h2 ref={titleRef}>My Projects</h2>
                <p ref={descriptionRef}>I bring creative ideas to life through detailed, user-focused solutions. Each project showcases my ability to blend innovation with functionality, delivering results that exceed expectations and drive success.</p>
                <div className='cards-container'>
                    {
                        props.allProjects ? (
                            cardsData.map((card, index) => (
                                <ProjectCard 
                                    key={index}
                                    cardProps={card}
                                    ref={(el) => projectCardRefs.current[index] = el}
                                />
                            ))
                         ) : (
                            cardsData.slice(0, 4).map((card, index) => (
                                <ProjectCard 
                                    key={index}
                                    cardProps={card}
                                    ref={(el) => projectCardRefs.current[index] = el}
                                />
                            ))
                         )
                    }
                </div>
            </div>
            <button className='filled-button' ref={seeMoreButtonRef} onClick={handleSeeMoreProjectsClick} style={displayButton()}>See More Projects</button>
        </section>
    )
}

MyProjectsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired,
    allProjects: PropTypes.bool
};

export default MyProjectsSection