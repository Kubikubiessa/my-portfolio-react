 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z3anl1q', 'template_apm3229', form.current, 'gaL2wlAx8y0TjMqaM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>
    <div>
<h1 className='pager-header'>Contact</h1>
</div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='send-button' type="submit" value="Send" />
    </form>
    </>
  )
}
