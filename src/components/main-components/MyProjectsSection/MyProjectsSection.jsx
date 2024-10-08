import './MyProjectsSection.css'
import PropTypes from 'prop-types';
import { useRef,useEffect } from 'react';
import ProjectCard from '../../sub-components/ProjectCard/ProjectCard';

function MyProjectsSection(props) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === titleRef.current || entry.target === descriptionRef.current) {
                    entry.target.classList.toggle('text-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('text-animationOff', !entry.isIntersecting);
                }
            });
        });

        const titleElement = titleRef.current;
        const descriptionElement = descriptionRef.current;

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }

        return () => {
            if (titleElement) {
                observer.unobserve(titleElement);
            }
            if (descriptionElement) {
                observer.unobserve(descriptionElement);
            }
        };
    }, []);

    return (
        <section style={backgroundColor} className='my-projects-conatiner'>
            <div className='my-projects-inner-conatiner'>
                <h2 ref={titleRef}>My Skills</h2>
                <p ref={descriptionRef}>I bring creative ideas to life through detailed, user-focused solutions. Each project showcases my ability to blend innovation with functionality, delivering results that exceed expectations and drive success.</p>
                <ProjectCard
                    cardProps = {{
                        cardTitle: 'Project 1',
                        cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
                        cardLinks: [
                            {
                                link: 'https://www.google.com/',
                                linkText: 'View Project'
                            }
                        ],
                        cardSmallBadges: [
                            {
                                badgeName: 'React',
                                badgeImage: 'react-badge'
                            },
                            {
                                badgeName: 'Node.js',
                                badgeImage: 'nodejs-badge'
                            }
                        ],
                        images: [
                            {
                                image: 'https://via.placeholder.com/300',
                                imageDescription: 'Project 1'
                            }
                        ]
                    }}
                ></ProjectCard>
            </div>
        </section>
    )
}

MyProjectsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default MyProjectsSection