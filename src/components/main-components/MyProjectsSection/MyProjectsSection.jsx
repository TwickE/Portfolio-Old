import './MyProjectsSection.css'
import PropTypes from 'prop-types';

function MyProjectsSection(props) {
    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    return (
        <section style={backgroundColor} className='my-projects-conatiner'>
        </section>
    )
}

MyProjectsSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default MyProjectsSection