import React from "react";
import "./Footer.css"; // Make sure to import the CSS file

function Footer() {
  return (
    <footer className="footer fixed-bottom bg-dark text-white text-center py-2">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Finance Tracker | All Rights Reserved
        </p>
        <p>
          <a href="/privacy" className="text-white">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-white">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
