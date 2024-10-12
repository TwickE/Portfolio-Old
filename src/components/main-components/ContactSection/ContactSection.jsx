import './ContactSection.css'
import PropTypes from 'prop-types';
import FilledButton from '../../sub-components/FilledButton/FilledButton';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import iconsFile from '../../../assets/icons.svg'

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
            <object type="image/svg+xml" data={iconsFile} style={{display: 'none'}}></object>
            <div className='contact-inner-container'>
                <form onSubmit={onSubmit} ref={formRef}>
                    <h2>Let&apos;s Talk!</h2>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <div className='form-devide-inputs'>
                        <input className='form-inputs' type="text" name='First Name' placeholder='First Name' required/>
                        <input className='form-inputs' type="text" name='Last Name' placeholder='Last Name' required/>
                    </div>
                    <div className='form-devide-inputs'>
                        <input className='form-inputs' type="email" name='Email Adress' placeholder='Email Adress' required/>
                        <input className='form-inputs' type="tel" name='Phone Number' placeholder='Phone Number' required/>
                    </div>
                    <textarea className='form-textarea' name='Message' placeholder='Message' required></textarea>
                    <span className='form-button'>
                        <FilledButton text='Send Message' />
                    </span>
                </form>
                <div className='contact-badges-container'>
                    <a className='contact-badge' href='mailto: fredericosilva2002@hotmail.com.com' target='_blank'>
                        <span>
                            <svg>
                                <use href={`${iconsFile}#mail-icon`}></use>
                            </svg>
                        </span>
                        <div className='contact-badge-text-container'>
                            <h6>Email</h6>
                            <h4>fredericosilva2002@hotmail.com</h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

ContactSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default ContactSection