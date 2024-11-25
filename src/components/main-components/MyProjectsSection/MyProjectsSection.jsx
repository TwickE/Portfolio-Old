import './MyProjectsSection.css'
import PropTypes from 'prop-types';
import { useRef } from 'react';
import ProjectCard from '../../sub-components/ProjectCard/ProjectCard';
import cardsData from '../../../assets/json/cards.json'
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function MyProjectsSection(props) {
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

    return (
        <section style={backgroundColor} className='my-projects-conatiner'>
            <div className='my-projects-inner-conatiner'>
                <ScrollAnimation animatePreScroll={false} animateIn='fadeInUp' offset={20}>
                    <h2>My Projects</h2>
                </ScrollAnimation>
                <ScrollAnimation animatePreScroll={false} animateIn='fadeInUp' offset={20}>
                    <p>I bring creative ideas to life through detailed, user-focused solutions. Each project showcases my ability to blend innovation with functionality, delivering results that exceed expectations and drive success.</p>
                </ScrollAnimation>
                <div className='cards-container'>
                    {
                        props.allProjects ? (
                            cardsData.map((card, index) => (
                                    <ProjectCard
                                        key={index}
                                        cardProps={{...card, cardAnimation: index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}}
                                    />
                            ))
                        ) : (
                            cardsData.slice(0, 4).map((card, index) => (
                                <ProjectCard
                                    key={index} 
                                    cardProps={{...card, cardAnimation: index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}}
                                />
                            ))
                        )
                    }
                </div>
            </div>
            <ScrollAnimation animateIn='fadeInUp' offset={20}>
                <button className='filled-button' ref={seeMoreButtonRef} onClick={handleSeeMoreProjectsClick} style={displayButton()}>See More Projects</button>
            </ScrollAnimation>
        </section>
    )
}

MyProjectsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired,
    allProjects: PropTypes.bool
};

export default MyProjectsSection