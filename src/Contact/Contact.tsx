import React from "react";
import "./Contact.scss";
type Props = {};

const Contact = (props: Props) => {
  const [name, setName] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className="contact-form">
      <div className="info right">
        <div>
          <h1>Get in Touch</h1>
          <p>Send me a message and Ill get back to you a soon as I can!</p>
        </div>
        <div className="info__bottom">
          <p>Send me an email at:</p>
          <p>akonibarrera@gmail.com</p>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <textarea value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} rows={150} />
        <button type="submit" >Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
