import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/footer.scss";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/alia_nk_09",
      color: "#E1306C", // Instagram brand color
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/alia-firdous-4770b6240/",
      color: "#0077B5", // LinkedIn brand color
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: "https://github.com/AliaF123",
      color: "#171515", // GitHub brand color
      label: "GitHub",
    },
    {
      icon: FaEnvelope,
      url: "mailto:aliafir0917@gmail.com",
      color: "#D44638", // Gmail brand color
      label: "Email",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="icon-link"
              style={{ color: link.color }} // Explicitly set the brand color
            >
              <link.icon size={30} />
            </a>
          ))}
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} aliafirdous.in All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
