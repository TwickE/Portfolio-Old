import './ContactSection.css'
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import ContactBadge from '../../sub-components/ContactBadge/ContactBadge';
import ScrollAnimation from 'react-animate-on-scroll';

function ContactSection(props) {
    const formRef = useRef(null);

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
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                color: "var(--text-color)",
                background: "var(--accent-color)",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "filled-button"
                },
                confirmButtonText: "Ok"

            });
            formRef.current.reset();
        }
    };

    return (
        <section style={backgroundColor} className='contact-conatiner'>
            <div className='contact-inner-container'>
                <ScrollAnimation animatePreScroll={false} animateOnce={true} animateIn='fadeInLeft' offset={50}>
                    <form ref={formRef} onSubmit={onSubmit}>
                        <h2>Let&apos;s Talk!</h2>
                        <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                        <div className='form-devide-inputs'>
                            <input className='form-inputs' type="text" name='First Name' placeholder='First Name' required />
                            <input className='form-inputs' type="text" name='Last Name' placeholder='Last Name' required />
                        </div>
                        <div className='form-devide-inputs'>
                            <input className='form-inputs' type="email" name='Email Adress' placeholder='Email Adress' required />
                            <input className='form-inputs' type="tel" pattern='[0-9+ ]*' name='Phone Number' placeholder='Phone Number' required />
                        </div>
                        <textarea className='form-textarea' name='Message' placeholder='Message' required></textarea>
                        <button className='filled-button form-button'>Send Message</button>
                    </form>
                </ScrollAnimation>
                <div className='contact-badges-container'>
                    <ContactBadge
                        link='mailto: fredericosilva2002@hotmail.com'
                        icon='mail-icon'
                        title='Email'
                        text='fredericosilva2002@hotmail.com'
                    />
                    <ContactBadge
                        link='https://www.linkedin.com/in/frederico-silva-727a8b21a/'
                        icon='linkedin-icon'
                        title='LinkedIn'
                        text='Frederico Silva'
                    />
                    <ContactBadge
                        link='https://github.com/TwickE'
                        icon='github-icon'
                        title='Github'
                        text='@TwickE'
                    />
                    <ContactBadge
                        link='https://codepen.io/TwickE'
                        icon='codepen-icon'
                        title='CodePen'
                        text='@TwickE'
                    />
                </div>
            </div>
        </section>
    )
}

ContactSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default ContactSection