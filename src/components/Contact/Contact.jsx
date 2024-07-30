import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { themeContext } from '../../Context';
import { contactMeText } from '../../assets/strings/strings';

const Contact = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_ua0m7dr', 'template_87kq4an', form.current, '4_Hd5ZgcDjIKqlXPl').then((result) => {
            setLoading(false);
            setEmailSent(true);
        }, (error) => {
            console.log(error.text);
            setLoading(false);
        });
    }

    setTimeout(() => {
        setEmailSent(false);
    }, 5000);

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='contact-form' id='Contact'>
            <div className='p-left'>
                <div className='p-left'>
                    <span style={{color: darkMode ? 'white' : ''}}>{contactMeText.getInTouch}</span>
                    <span>{contactMeText.contactMe}</span>
                    <div className='blur p-blur1' style={{background: '#ABF1FF94'}} />
                </div>
            </div>

            <div className='c-right'>
                { 
                    loading ? 
                        <div className='loader' /> 
                        :
                            emailSent ?
                                <span>{contactMeText.emailSentSuccessMessage}</span>
                            :
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type='text' name='user_name' className='user' placeholder='Name' />
                                    <input type='email' name='user_email' className='user' placeholder='Email' />
                                    <textarea name='message' className='user' placeholder='Message' />
                                    <input type='submit' value='Send' className='button' />
                                    <div className='blur c-blur1' style={{background: 'var(--purple)'}} />
                                </form>
                }
            </div>
        </div>
    )
}

export default Contact;
