import * as React from 'react';
import Logo from '../assets/adsells-logo-trans.png';
import {FaFacebook, FaTwitter, FaDribbble, FaLinkedin} from 'react-icons/fa';

interface IProps {}

const Footer = (props: IProps) => (
  <footer className="Footer">
    <div className="container">
      <div className="Footer__Logo">
        <img src={Logo} alt={'logo'} />
        <p> Unleash Your Potential.</p>
      </div>
      <div className="Footer__Links-Lists">
        <div className="Footer__Links-List is-text-centered">
          <h3 className="Footer__Links__List-Title">Quick links</h3>
          <ul className="is-text-centered">
            <li>About Us</li>
            <li>Services</li>
            <li>Core Team</li>
            <li>Why Us?</li>
            <li>Location</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="Footer__Bottom is-text-centered">
        <h3>Connect with us</h3>
        <ul>
          <li>
            <a href="" className="btn btn--icon">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="" className="btn btn--icon">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="" className="btn btn--icon">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="" className="btn btn--icon">
              <FaDribbble />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
