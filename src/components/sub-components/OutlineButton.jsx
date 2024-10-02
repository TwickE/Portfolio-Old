import './OutlineButton.css'
import PropTypes from 'prop-types';

function OutlineButton({ buttonProps }) {
    return (
        <button className={`outline-button ${buttonProps.buttonSmall ? 'small' : 'large'}`}>
            {buttonProps.startImage && <img src={buttonProps.startImageSrc} alt={buttonProps.startImageText} />}
            {buttonProps.text}
            {buttonProps.endImage && <img src={buttonProps.endImageSrc} alt={buttonProps.endImageText} />}
        </button>
    )
}

OutlineButton.propTypes = {
    buttonProps: PropTypes.shape({
        buttonSmall: PropTypes.bool.isRequired,
        startImage: PropTypes.bool.isRequired,
        startImageSrc: PropTypes.string,
        startImageText: PropTypes.string,
        text: PropTypes.string.isRequired,
        endImage: PropTypes.bool.isRequired,
        endImageSrc: PropTypes.string,
        endImageText: PropTypes.string
    }).isRequired
};

export default OutlineButton