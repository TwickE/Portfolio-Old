import './ContactSection.css'
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2'
import ContactBadge from '../../sub-components/ContactBadge/ContactBadge';
import useScrollAnimation from '../../../hooks/useScrollAnimation.jsx'

function ContactSection(props) {
    const formRef = useRef(null);
    const formVisible = useScrollAnimation(formRef, 50);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const backgroundColor = {
        backgroundColor: props.backgroundColor ? 'var(--background-color2)' : 'var(--background-color1)'
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        try {
            setIsSubmitting(true);
            const formData = new FormData(e.target);
            const object = Object.fromEntries(formData);

            const response = await fetch("https://portfolio-server-6bn8.onrender.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(object)
            });

            const res = await response.json();

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            if (res.success) {
                await Swal.fire({
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
                formRef.current?.reset();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            await Swal.fire({
                title: "Error!",
                text: "Failed to send message. Please try again.",
                icon: "error",
                color: "var(--text-color)",
                background: "var(--accent-color)",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "filled-button"
                },
                confirmButtonText: "Ok"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    /* const onSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        try {
            setIsSubmitting(true);
            const formData = new FormData(e.target);
            formData.append("access_key", import.meta.env.VITE_FORM_API_KEY);

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const res = await response.json();

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            if (res.success) {
                await Swal.fire({
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
                formRef.current?.reset();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            await Swal.fire({
                title: "Error!",
                text: "Failed to send message. Please try again.",
                icon: "error",
                color: "var(--text-color)",
                background: "var(--accent-color)",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "filled-button"
                },
                confirmButtonText: "Ok"
            });
        } finally {
            setIsSubmitting(false);
        }
    }; */

    return (
        <section style={backgroundColor} className='contact-conatiner'>
            <div className='contact-inner-container'>
                <form ref={formRef} onSubmit={onSubmit} className={formVisible ? 'fadeInLeft' : 'no-animation'}>
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
                    <button className='filled-button form-button' disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
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