import './ContactSection.css'
import PropTypes from 'prop-types';
import FilledButton from '../../sub-components/FilledButton/FilledButton';

function ContactSection(props) {
    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_FORM_API_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <section style={backgroundColor} className='contact-conatiner'>
            <div className='contact-inner-container'>
                <form onSubmit={onSubmit}>
                    <h2>Let&apos;s Talk!</h2>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <div className='form-devide-inputs'>
                        <input className='form-inputs' type="text" name='First Name' placeholder='First Name' />
                        <input className='form-inputs' type="text" name='Last Name' placeholder='Last Name' />
                    </div>
                    <div className='form-devide-inputs'>
                        <input className='form-inputs' type="email" name='Email Adress' placeholder='Email Adress' />
                        <input className='form-inputs' type="tel" name='Phone Number' placeholder='Phone Number' />
                    </div>
                    <textarea className='form-textarea' name='Message' placeholder='Message'></textarea>
                    <span className='form-button'>
                        <FilledButton text='Send Message' />
                    </span>
                </form>
            </div>
        </section>
    )
}

ContactSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default ContactSection