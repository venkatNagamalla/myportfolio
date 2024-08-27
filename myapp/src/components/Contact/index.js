import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs
        .sendForm("service_b0cl51m", "template_15oezpc", form.current, {
          publicKey: "v66oZaZZsADVNVrtu",
        })
        .then(
          () => {
            console.log("SUCCESS!")
            e.target.reset();
            alert("Email Sent Successfully!!")
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    
  };

  return (
    <section id="contact" className="contact-container">
      <div class="inner-container">
      <div className="contact-heading-container">
        <h1 className="contact-heading">Contact Me</h1>
      </div>

      <div class="contact-inner-container">
      <div className="details-container">
        <h1>Get in Touch</h1>

        <div class="contact-logo-container">
          <i class="fa-solid fa-user"></i>
          <div class="data">
            <p class="data-head">Name</p>
            <p class="data-text">Venkat Nagamalla</p>
          </div>
        </div>

        <div class="contact-logo-container">
          <i class="fa-solid fa-envelope"></i>
          <div class="data">
            <p class="data-head">Email</p>
            <p class="data-text">shivavenkat006@gmail.com</p>
          </div>
        </div>

        <div class="contact-logo-container">
          <i class="fa-solid fa-location-dot"></i>
          <div class="data">
            <p class="data-head">Address</p>
            <p class="data-text">Khammam, Telangana</p>
          </div>
        </div>

      </div>

      <div className="form-container">
        <p className="form-text">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              name="your_name"
              placeholder="Name"
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="your_email"
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Text here..."
            />
          </div>
          <button className="submit" type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
    </section>
  );
};
export default Contact;
