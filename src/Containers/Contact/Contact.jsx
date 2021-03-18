import React from 'react';
import Title from '../../Components/Title/Title';
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="contact-container">
        <Title>Contact With Me</Title>
        <a href="tel: 01041368349">phone</a>
        <a href="sms: 010-4136-8349">phone</a>
        {/* <button onClick="location.href='mailto: dyek72731@gmail.com'">mail!</button> */}
        <a href="mailto: dyek72731@gmail.com">mail</a>
      </div>
    </section>
  )
}

export default Contact
