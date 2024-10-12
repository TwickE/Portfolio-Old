import './ContactSection.css'
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Swal from 'sweetalert2'
import iconsFile from '../../../assets/icons.svg'
import ContactBadge from '../../sub-components/ContactBadge/ContactBadge';

function ContactSection(props) {
    const formRef = useRef(null);
    const contactBadge1Ref = useRef(null);
    const contactBadge2Ref = useRef(null);
    const contactBadge3Ref = useRef(null);
    const contactBadge4Ref = useRef(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === formRef.current) {
                    entry.target.classList.toggle('left-card-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('left-card-animationOff', !entry.isIntersecting);
                } else if (entry.target === contactBadge1Ref.current) {
                    entry.target.classList.toggle('right-card-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('right-card-animationOff', !entry.isIntersecting);
                }else if (entry.target === contactBadge2Ref.current) {
                    entry.target.classList.toggle('right-card-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('right-card-animationOff', !entry.isIntersecting);
                }else if (entry.target === contactBadge3Ref.current) {
                    entry.target.classList.toggle('right-card-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('right-card-animationOff', !entry.isIntersecting);
                }else if (entry.target === contactBadge4Ref.current) {
                    entry.target.classList.toggle('right-card-animationOn', entry.isIntersecting);
                    entry.target.classList.toggle('right-card-animationOff', !entry.isIntersecting);
                }
            });
        });

        if (formRef.current) {
            observer.observe(formRef.current);
        }
        if (contactBadge1Ref.current) {
            observer.observe(contactBadge1Ref.current);
        }
        if (contactBadge2Ref.current) {
            observer.observe(contactBadge2Ref.current);
        }
        if (contactBadge3Ref.current) {
            observer.observe(contactBadge3Ref.current);
        }
        if (contactBadge4Ref.current) {
            observer.observe(contactBadge4Ref.current);
        }

        const formElement = formRef.current
        const contactBadge1Element = contactBadge1Ref.current
        const contactBadge2Element = contactBadge1Ref.current
        const contactBadge3Element = contactBadge1Ref.current
        const contactBadge4Element = contactBadge1Ref.current

        return () => {
            if (formElement) {
                observer.unobserve(formElement);
            }
            if (contactBadge1Element) {
                observer.unobserve(contactBadge1Element);
            }
            if (contactBadge2Element) {
                observer.unobserve(contactBadge2Element);
            }
            if (contactBadge3Element) {
                observer.unobserve(contactBadge3Element);
            }
            if (contactBadge4Element) {
                observer.unobserve(contactBadge4Element);
            }
        };
    }, []);

    return (
        <section style={backgroundColor} className='contact-conatiner'>
            <object type="image/svg+xml" data={iconsFile} style={{ display: 'none' }}></object>
            <div className='contact-inner-container'>
                <form onSubmit={onSubmit} ref={formRef}>
                    <h2>Let&apos;s Talk!</h2>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <div className='form-devide-inputs'>
                        <input className='form-inputs' type="text" name='First Name' placeholder='First Name' required />
                        <input className='form-inputs' type="text" name='Last Name' placeholder='Last Name' required />
                    </div>
                    <div className='form-devide-inputs'>
                        <input className='form-inputs' type="email" name='Email Adress' placeholder='Email Adress' required />
                        <input className='form-inputs' type="tel" name='Phone Number' placeholder='Phone Number' required />
                    </div>
                    <textarea className='form-textarea' name='Message' placeholder='Message' required></textarea>
                    <button className='filled-button form-button'>Send Message</button>
                </form>
                <div className='contact-badges-container'>
                    <span ref={contactBadge1Ref}>
                        <ContactBadge
                            link='mailto: fredericosilva2002@hotmail.com'
                            icon='mail-icon'
                            title='Email'
                            text='fredericosilva2002@hotmail.com'
                        />
                    </span>
                    <span ref={contactBadge2Ref}>
                        <ContactBadge
                            link='https://www.linkedin.com/in/frederico-silva-727a8b21a/'
                            icon='linkedin-icon'
                            title='LinkedIn'
                            text='Frederico Silva'
                        />
                    </span>
                    <span ref={contactBadge3Ref}>
                        <ContactBadge
                            link='https://github.com/TwickE'
                            icon='github-icon'
                            title='Github'
                            text='@TwickE'
                        />
                    </span>
                    <span ref={contactBadge4Ref}>
                        <ContactBadge
                            link='https://codepen.io/TwickE'
                            icon='codepen-icon'
                            title='CodePen'
                            text='@TwickE'
                        />
                    </span>
                </div>
            </div>
        </section>
    )
}

ContactSection.propTypes = {
    backgroundColor: PropTypes.bool.isRequired
};

export default ContactSection