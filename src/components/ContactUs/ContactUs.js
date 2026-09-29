import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d9sd2ll", "template_s0ldnoo", form.current, {
        publicKey: "ZYC8DLihmHp5TEjz9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div id="contact_wrapper">
      <form ref={form} onSubmit={sendEmail}>
        <h1>Formulario de Contacto</h1>
        <div className="field">
          <label>Nombre y Apellido</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>
        <div className="field">
          <label>Mensaje</label>
          <textarea name="message" maxLength={300} required />
        </div>
        <div className="field">
          <input type="submit" value="Enviar" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
