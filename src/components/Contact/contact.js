import React, { useState } from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import CommonHeader from "../Layout/CommonHeader";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ijxjthk", "template_pq1som9", form.current, {
        publicKey: "mv3F-0e93ynTVh_Fm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000); // Reset acknowledgment message after 5 seconds
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contactParent">
      <CommonHeader/>
      <div id="contact">
       
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <h1 className="contactPageDetails">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the below form to discuss.
        </span>
        {isSubmitted && <p className="acknowledgmentMessage">Message sent successfully! I'll get back to you soon.</p>}
          <input type="text" className="name" placeholder="Your Name" name="from_name" required />
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
