import * as React from 'react';
import {FaTimes} from 'react-icons/fa';
import NavbarBrand from '../assets/adsells-logo-trans.png';
import {Link} from 'react-scroll';

interface IProps {
  active: boolean;
  close: () => void;
}

const Navbar = (props: IProps) => {
  return (
    <nav className={'Navbar' + (props.active ? ' active' : '')}>
      <div className="Navbar__Wrapper">
        <div className="Navbar__Close">
          <button className="btn btn--icon btn--accent" onClick={props.close}>
            <FaTimes />
          </button>
        </div>
        <ul className="Navbar__Links">
          <li className="Navbar__Link Navbar__Home-Button">
            <Link to="App" duration={400} smooth={'easeInOutQuart'} delay={0}>
              <img src={NavbarBrand} />
            </Link>
          </li>
          <li className="Navbar__Link">
            <Link to="About" duration={400} smooth={'easeInOutQuart'} delay={0}>
              About Us
            </Link>
          </li>
          <li className="Navbar__Link">
            <Link
              to="Services"
              duration={400}
              smooth={'easeInOutQuart'}
              delay={0}
            >
              Services
            </Link>
          </li>
          <li className="Navbar__Link">
            <Link
              to="Features"
              duration={400}
              smooth={'easeInOutQuart'}
              delay={0}
            >
              Why Choose Us ?
            </Link>
          </li>
          <li className="Navbar__Link">
            <Link to="Team" duration={400} smooth={'easeInOutQuart'} delay={0}>
              Our Core Team
            </Link>
          </li>
          <li className="Navbar__Link">
            <Link
              to="Location"
              duration={400}
              smooth={'easeInOutQuart'}
              delay={0}
            >
              Location
            </Link>
          </li>
          <li className="Navbar__Link">
            <Link
              to="Contact"
              duration={400}
              smooth={'easeInOutQuart'}
              delay={0}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
