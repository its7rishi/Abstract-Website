import "./Footer.css";
import { TbBrandAbstract } from "react-icons/tb";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="abstract">
        <h4>Abstract</h4>
        <ul>
          <li>Start Trial</li>
          <li>Pricing</li>
          <li>Download</li>
        </ul>
      </div>
      <div className="resources">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="community">
        <h4>Community</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className="company">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
        <h5>Contact Us</h5>
        <a href="#">info@abstract.com</a>
      </div>
      <div className="copyright">
        <div className="copy-text">
          <TbBrandAbstract className="footer-logo" />
          <p>
            <span>
              <FaRegCopyright className="copy-logo" /> Copyright 2023
            </span>{" "}
            <br />
            <span>Abstract Studio Design, Inc. </span> <br />
            <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
