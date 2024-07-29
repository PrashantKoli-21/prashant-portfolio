import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { themeContext } from '../../Context';

const Contact = () => {

    const [emailSent, setEmailSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ua0m7dr', 'template_87kq4an', form.current, '4_Hd5ZgcDjIKqlXPl').then((result) => {
            setEmailSent(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='contact-form' id='Contact'>
            <div className='p-left'>
                <div className='p-left'>
                    <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
                    <span>Contact Me</span>
                    <div className='blur p-blur1' style={{background: '#ABF1FF94'}} />
                </div>
            </div>

            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name' />
                    <input type='email' name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message' />
                    <input type='submit' value='Send' className='button' />
                    <span>{emailSent && 'Thanks for cantacting me!'}</span>
                    <div className='blur c-blur1' style={{background: 'var(--purple)'}} />
                </form>
            </div>
        </div>
    )
}

export default Contact;
