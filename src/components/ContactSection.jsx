import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const ContactSection = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="contact">
      <h1 className="main_heading">Contact Page</h1>
      <div className="google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6797.67608080006!2d74.36898329498187!3d31.583488936423002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ac38818005f%3A0xe1612460de0fb770!2sBaghbanpura%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700648929483!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Contact Google Map"
        ></iframe>
      </div>

      <div className="container">
        <div className="contact_form">
          <form action="https://formspree.io/f/mqkvovvv" method="POST">
            <input
              placeholder="Username"
              type="text"
              value={isAuthenticated ? `${user.name}` : ""}
              name="Usernaem"
              required
            />
            <input
              placeholder="Email"
              value={isAuthenticated ? `${user.email}` : ""}
              type="text"
              name="email"
              required
            />

            <textarea
              placeholder="Massage"
              name="Massage"
              required
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
