import React from "react";
import {
  FaApple,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const feature = [
  "Swap Cryptocurrency",
  "Sell And Buy Gift cards",
  "Buy and Pay Bills and Utilities",
];
const company = [
  "Contact Us",
  "About Us",
  "Blog",
  "Marketing",
  "Terms of Use",
  "Our Careers",
];
const legal = ["Privacy Policy"];

const FooterSection = ({ title, items }) => (
  <div className={title.toLowerCase()}>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Link to="">{item}</Link>
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  return (
    <footer className="footerSection">
      <div className="mainDiv">
        <div className="logoSection">
          <div className="sousLogo">
            <img
              src="https://apexnetwork.co/_nuxt/logo.c3221d32.png"
              alt="logo"
              className="logo"
            />
            <p>
              The most trustworthy cryptocurrency exchange platform available.
              Where you can have quick access to your money whenever you desire.
            </p>
          </div>
        </div>
        <div className="footerInfos">
          <FooterSection title="Features" items={feature} />
          <FooterSection title="Company" items={company} />
          <FooterSection title="Legal" items={legal} />
          <div className="app-downloand">
            <h3>Download the app now</h3>
            <div className="manufactured">
              <button type="button">
                <FaApple />
              </button>
              <button type="button">
                <FaGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="svgIcon">
          <p>Copyright &copy;2024 Apex Network. All rights reserved.</p>
          <div className="footer-icons">
            <FaXTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
