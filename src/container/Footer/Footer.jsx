import React, { useState, useRef } from 'react';
import {MdEmail, MdPhone} from 'react-icons/md'
import emailjs from '@emailjs/browser'
import { email, mobile } from '../../assets';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rdoi95r', 'template_73jm645', form.current, 'dcF86sVQDcg-rCBo-')
      .then((result) => {
          console.log(result.text);
          setIsFormSubmitted(true)
      }, (error) => {
          console.log(error.text);
      });
    

  };

  
  return (
    <>
    <h2 className="head-text">Contact</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <MdEmail className='app_footer-icon' size={28} color="#313bac"/>
          <p className="p-text">rhigh8609@student.whatcom.edu</p>
        </div>
      </div>
      {!isFormSubmitted ? (
        

        <div className="app__footer-form app__flex">
        <form className="app__footer-form app__flex" ref={form} onSubmit={sendEmail}>
          <div className="app__flex">
          <input className="p-text" type="name" placeholder="Your Name" name="user_name"  />
          </div>
          <div className='app__flex'>
          <input className="p-text" type="email" placeholder="Your Email" name="user_email" />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <input classname='submit__button' type="submit" value="Send" />
        </form>
        </div>
      ) : (
        <>
          <h3 className="contact__message" >
            Thank you for getting in touch!
          </h3>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);