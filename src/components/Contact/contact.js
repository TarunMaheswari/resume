import React,{ useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_879tnxi','template_oxg0mfi', form.current, '7pxu3Qy06XJKAgXg7')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!')
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section className='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='from_email'/>
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'><h2>Submit</h2></button>
                </form>
                <div className='links'>
                    <a aria-label="Chat on WhatsApp" href="https://wa.me/+917735382558"  target="_blank"><img src={FacebookIcon} alt='FacebookIcon' className='link1'/></a>
                    <a href="https://www.linkedin.com/in/tarun-maheswari-457226205"  target="_blank"><img src={YouTubeIcon} alt='YouTubeIcon' className='link3'/></a>
                    <a href="https://github.com/TarunMaheswari"  target="_blank"><img src={TwitterIcon} alt='TwitterIcon' className='link2'/></a>
                </div>
            </div>
        </section>
    )
}
export default Contact;