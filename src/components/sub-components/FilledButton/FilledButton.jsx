import './FilledButton.css'
import PropTypes from 'prop-types';

function FilledButton(props) {
    return (
        <button className='filled-button'>{props.text}</button>
    )
}

FilledButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default FilledButton