import * as React from 'react';
import {FaArrowUp, FaBars} from 'react-icons/fa';
import {Link} from 'react-scroll';
import debounce from 'lodash.debounce';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Features from './components/Features';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export interface IService {
  url: string;
  name: string;
  description: string;
}

export interface IFeature {
  images: Array<string>;
  title: string;
  description: Array<string>;
}

const features: Array<IFeature> = [
  {
    images: ['./assets/target.svg', './assets/piggy-bank.svg'],
    title: 'No leads, no payment',
    description: [
      'We provide a comprehensive, target oriented approach, to all our services at pocket friendly rates.',
      'Full payment only on deal completion.',
    ],
  },
  {
    images: ['./assets/teamwork.svg', './assets/workforce.svg'],
    title: 'Dedicated workforce',
    description: [
      'Our team works full-time to tailor your web presence to your specification no matter how big or small your product might be.',
      'We design your digital presence and market it across all platforms with rich content including videos, websites, posters and banners. ',
    ],
  },
  {
    images: ['./assets/team.svg', './assets/startup.svg'],
    title: 'Team of experienced professionals',
    description: [
      'From experienced professional Marketing Consutants to SEO Data Specialists, formulate the most all of us work to boost your brand recognition and propel you to financial success.',
    ],
  },
  {
    images: ['./assets/bulb.svg', './assets/pencil.svg'],
    title: 'Creative Solutions',
    description: [
      'We achieve targets and maximum  market penetration and brand visibility through our time-tested innovative and out of the box techniques.',
      'We design your digital presence and market it across all platforms with rich content including videos, websites, posters and banners. ',
    ],
  },
  {
    images: ['./assets/pay-per-module.svg', './assets/achievement.svg'],
    title: 'Modular Approach',
    description: [
      "Besides our Brand Recognition approach we also provide our Modular package where you can pick and choose the exact services that you require for your product's success",
    ],
  },
];

const services: Array<IService> = [
  {
    url: './assets/bdo.jpg',
    name: 'Business Development Overview',
    description:
      'a complete business development package delivering optimized market results for your company. ',
  },
  {
    url: './assets/cw.jpg',
    name: 'Content Writing',
    description:
      'Creating lucid and innovative content for your company for maximum visibility across all platforms.',
  },
  {
    url: './assets/cm.jpg',
    name: 'Content Marketing',
    description:
      'Delivering your vision to your target customers through effective marketing solutions.',
  },
  {
    url: './assets/pa.jpg',
    name: 'Product Advertising',
    description:
      ' ADSELLS doesn’t just advertise your product. We ensure that it sells.',
  },
  {
    url: './assets/ns.jpg',
    name: 'Networking Solutions',
    description:
      'We transform your company into a collaborative global consortium of like-minded entities using a vast network of investors and clientele.',
  },
  {
    url: './assets/dmg.jpg',
    name: 'digital marketing and graphics',
    description:
      'The perfect balance between artistic genius and business strategy is a combination guaranteed by the ADSELLS experience.',
  },
];

interface IProps {}

const App = (props: IProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = debounce(
    (e: UIEvent) => {
      const goUp = document.querySelector('.App__goUp');
      if (goUp) {
        if (pageYOffset > 1000) {
          goUp.classList.add('active');
        } else {
          goUp.classList.remove('active');
        }
      }
    },
    100,
    {leading: true, trailing: false},
  );

  const goUp = () => {};

  return (
    <div id="App">
      <div className="App__goUp">
        <Link
          to="App"
          className="btn btn--icon btn--accent"
          onClick={goUp}
          smooth={'easeInOutQuart'}
          duration={500}
          delay={0}
        >
          <FaArrowUp />
        </Link>
      </div>
      <div className="App__Navbar-Toggle">
        <button
          className="btn btn--icon btn--accent"
          onClick={() => setIsNavbarOpen(true)}
        >
          <FaBars />
        </button>
      </div>
      {/* Navbar */}
      <Navbar active={isNavbarOpen} close={() => setIsNavbarOpen(false)} />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Services */}
      <Services services={services} />

      {/* Features */}
      <Features features={features} />
      {/* Team */}
      <Team />

      {/* Location */}
      <Location />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
