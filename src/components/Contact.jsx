import "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you’d like to connect, feel free to reach out!</p>

      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message:</label>
        <textarea placeholder="Your message here..." required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Contact;
