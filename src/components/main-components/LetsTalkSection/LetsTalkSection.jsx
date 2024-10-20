import './LetsTalkSection.css'
import PropTypes from 'prop-types';
import iconsFile from '../../../assets/icons.svg'

function LetsTalkSection(props) {
    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    return (
        <section style={backgroundColor} className='lets-talk-container'>
            <div className='lets-talk-inner-container'>
                <h4>Want to know more?</h4>
                <h2 className='lets-talk-text'>
                    <span>L</span>
                    <span>e</span>
                    <span>t</span>
                    <span>&apos;</span>
                    <span>s</span>
                    <span>&nbsp;</span>
                    <span>T</span>
                    <span>a</span>
                    <span>l</span>
                    <span>k</span>
                    <span>!</span>
                </h2>
                <div className='redirect-email-container'>
                    <a href='mailto:fredericosilva2002@hotmail.com' target='_blank' className='redirect-email'>fredericosilva2002@hotmail.com</a>
                    <svg>
                        <use href={`${iconsFile}#arrow-icon`}></use>
                    </svg>
                </div>
            </div>
        </section>
    )
}

LetsTalkSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
}

export default LetsTalkSection;