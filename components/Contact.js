import { useState } from "react";
import emailjs from "emailjs-com";
import Map from "./Map";
import { ImLocation } from "react-icons/im";
import { BsPhone } from "react-icons/bs";

import contactStyles from "../styles/Contact.module.css";

const Contact = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqxbpy4",
        "template_faen34o",
        e.target,
        "user_bm37QJFLQoyKqlOoNcG0e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowConfirmation(true);
  };

  const openModal =
    contactStyles["modal-container"] + " " + contactStyles["show"];

  const hideModal = contactStyles["modal-container"];
  return (
    <div className={contactStyles.container} id="contact">
      <div className={contactStyles.flex}>
        <form
          onSubmit={sendEmail}
          className={contactStyles.form}
          data-aos="fade-up"
        >
          <h1>Book a session or ask us anything you like</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className={contactStyles.details} data-aos="fade-up">
          <h1>Where you can find us</h1>

          <div className={contactStyles.map}>
            <Map />
          </div>

          <p>
            <span>
              <ImLocation />
            </span>{" "}
            Agiou Nektariou 31-29, Chania 733 00
          </p>

          <p>
            <span>
              <BsPhone />
            </span>{" "}
            +30 698 739 1659
          </p>
        </div>
      </div>
      <div className={showConfirmation ? openModal : hideModal}>
        <div className={contactStyles.modal}>
          <h4>Thank you for your message!</h4>
          <button
            className={
              contactStyles["contact-btn"] + " " + contactStyles["modal-btn"]
            }
            onClick={() => setShowConfirmation(false)}
          >
            Close
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Contact;
