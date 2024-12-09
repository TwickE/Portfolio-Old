import './MyProjectsSection.css'
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import ProjectCard from '../../sub-components/ProjectCard/ProjectCard';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'

function MyProjectsSection(props) {
    const h2Ref = useRef(null);
    const h2Visible = useScrollAnimation(h2Ref, 20);
    const pRef = useRef(null);
    const pVisible = useScrollAnimation(pRef, 20);
    const buttonRef = useRef(null);
    const buttonVisible = useScrollAnimation(buttonRef, 50);

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

    const [displayedProjects, setDisplayedProjects] = useState([]);

    useEffect(() => {
        import('../../../assets/data.js').then(({ projects }) => {
            setDisplayedProjects(
                props.allProjects ? projects : projects.slice(0, 4)
            );
        });
    }, [props.allProjects]);

    return (
        <section style={backgroundColor} className='my-projects-conatiner'>
            <div className='my-projects-inner-conatiner'>
                <div ref={h2Ref} className={h2Visible ? 'fadeInUp' : 'no-animation'}>
                    <h2>My Projects</h2>
                </div>
                <div ref={pRef} className={pVisible ? 'fadeInUp' : 'no-animation'}>
                    <p>I bring creative ideas to life through detailed, user-focused solutions. Each project showcases my ability to blend innovation with functionality, delivering results that exceed expectations and drive success.</p>
                </div>
                <div className='cards-container'>
                    {displayedProjects.map((card, index) => (
                        <ProjectCard
                            key={card.id || index}
                            cardProps={{
                                ...card,
                                cardAnimation: index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'
                            }}
                        />
                    ))}
                </div>
            </div>
            <div ref={buttonRef} className={buttonVisible ? 'fadeInUp' : 'no-animation'}>
                <button className='filled-button' ref={seeMoreButtonRef} onClick={handleSeeMoreProjectsClick} style={displayButton()}>See More Projects</button>
            </div>
        </section>
    )
}

MyProjectsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired,
    allProjects: PropTypes.bool
};

export default MyProjectsSection