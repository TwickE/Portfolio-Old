import './FilledButton.css'
import PropTypes from 'prop-types';

function FilledButton(props) {
    return (
        <button className='filled-button' onClick={props.clickFunction}>{props.text}</button>
    )
}

FilledButton.propTypes = {
    text: PropTypes.string.isRequired,
    clickFunction: PropTypes.func
};

export default FilledButton