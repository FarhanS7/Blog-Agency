import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <div>
        <h3 className="footer-title">About Us</h3>
        <p>
          We are committed to providing the best content and services to our
          users.
        </p>
      </div>
      <div>
        <h3 className="footer-title">Links</h3>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <h3 className="footer-title">Follow Us</h3>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
