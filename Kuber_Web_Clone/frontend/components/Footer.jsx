import React from "react";
import "./Footer.css"; // Make sure to import the updated CSS file

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Finance Tracker | All Rights Reserved
        </p>
        <p>
          <a href="/privacy" className="text-primary">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-primary">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
