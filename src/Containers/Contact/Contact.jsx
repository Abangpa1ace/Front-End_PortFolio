import React from 'react';
import emailjs from 'emailjs-com';
import Title from '../../Components/Title/Title';
import { BiPhone, BiMessage } from 'react-icons/bi';
import { FaGithub, FaBloggerB } from 'react-icons/fa';
import "./Contact.scss";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Gmail_template_portfolio', 'template_3d170jf', e.target, 'user_N56jDceNp6ojUk7cajbqd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
  }

  return (
    <section id="Contact">
      <div className="contact-container">
        <Title>Contact With Me</Title>
        <div className="contact-list">
          <div className="contact-email">
            <h3>Email</h3>
            <p>- Gmail 보내기</p>
            <form className="contact-email-form" onSubmit={sendEmail}>
              <div className="form-name-mail">
                <div>
                  <label>Name</label>
                  <input type="text" name="from_name" />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" name="from_email" />
                </div>
              </div>
              <label>Message</label>
              <textarea name="message" />
              <button type="submit" className="contact-submit-btn">전송</button>
            </form>
            <p>또는</p>
            <p>- 이메일 주소 : <a href="mailto: dyek72731@gmail.com">dyek72731@gmail.com</a></p>
          </div>
          <div className="contact-phone">
            <h3>Phone</h3>
            <p>- 전화번호: 010-4136-8349</p>
            <a href="tel: 010-4136-8349"><BiPhone />음성전화</a>
            <a href="sms: 010-4136-8349"><BiMessage />문자메세지</a>
          </div>
          <div className="contact-reference">
            <h3>References</h3>
            <p>- Github</p>
            <a href="https://github.com/Abangpa1ace"><FaGithub />github.com/Abangpa1ace</a>
            <p>- Blog</p>
            <a href="https://abangpa1ace.tistory.com/"><FaBloggerB />abangpa1ace.tistory.com/</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
