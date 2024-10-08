import './OutlineButton.css'
import PropTypes from 'prop-types';
import iconsFile from '../../../assets/icons.svg'

function OutlineButton({ buttonProps }) {
    return (
        <>
            <object type="image/svg+xml" data={iconsFile} style={{display: 'none'}}></object>
            <button className={`outline-button ${buttonProps.buttonSmall ? 'small' : 'large'}`} onClick={buttonProps.clickFunction}>
                {buttonProps.startImage && (
                    <svg className='margin-right'>
                        <use href={`${iconsFile}#${buttonProps.startImageSrc}`}></use>
                    </svg>
                    )}
                {buttonProps.text}
                {buttonProps.endImage && (
                    <svg className='rotate'>
                        <use href={`${iconsFile}#${buttonProps.endImageSrc}`}></use>
                    </svg>
                    )}
            </button>
        </>
    )
}

OutlineButton.propTypes = {
    buttonProps: PropTypes.shape({
        buttonSmall: PropTypes.bool.isRequired,
        startImage: PropTypes.bool.isRequired,
        startImageSrc: PropTypes.string,
        text: PropTypes.string.isRequired,
        endImage: PropTypes.bool.isRequired,
        endImageSrc: PropTypes.string,
        clickFunction: PropTypes.func.isRequired
    }).isRequired
};

export default OutlineButton