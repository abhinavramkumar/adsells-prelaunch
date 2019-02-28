import * as React from 'react';
import {TimelineMax, Expo} from 'gsap';
import {Link} from 'react-scroll';

interface IProps {}

const Hero = (props: IProps) => {
  React.useEffect(() => {
    let timeline = new TimelineMax({
      repeat: false,
    });

    timeline.set('.Hero-Logo', {
      yPercent: -100,
      autoAlpha: 0,
    });

    timeline
      .to(
        '.Hero-Logo',
        0.5,
        {
          yPercent: 0,
          autoAlpha: 1,
          ease: Expo.easeInOut,
        },
        '+=1',
      )
      .to(
        '.Hero-Text-1',
        1,
        {
          y: -600,
          autoAlpha: 1,
          ease: Expo.easeInOut,
        },
        '+=1',
      )
      .to(
        '.Hero-Text-1',
        1,
        {
          y: -300,
          autoAlpha: 0,
          ease: Expo.easeInOut,
        },
        '+=2',
      )
      .to(
        '.Hero-Text-2',
        1,
        {
          y: -600,
          autoAlpha: 1,
          ease: Expo.easeInOut,
        },
        '+=1',
      )
      .to(
        '.Hero-Text-2',
        1,
        {
          y: -300,
          autoAlpha: 0,
          ease: Expo.easeInOut,
        },
        '+=2',
      )
      .to(
        '.Hero-Text-3',
        1,
        {
          y: -600,
          autoAlpha: 1,
          ease: Expo.easeInOut,
        },
        '+=1',
      )
      .to(
        '.Hero-Text-3',
        1,
        {
          y: -300,
          autoAlpha: 0,
          ease: Expo.easeInOut,
        },
        '+=2',
      )
      .to(
        '.Hero-CTA',
        1,
        {
          y: -550,
          autoAlpha: 1,
          ease: Expo.easeInOut,
        },
        '+=1',
      );

    timeline.play();
  }, []);

  return (
    <section className="Hero">
      <div className="Hero-Logo">
        <img src="./assets/adsells-logo-trans-shadow.png" alt="" />
      </div>
      {/* <div className="Hero-Logo--fixed">
        <img src="./assets/adsells-logo-trans-shadow.png" alt="" />
      </div> */}
      <div className="Hero__Wrapper">
        <div className="Hero-Text Hero-Motto">
          <p>Synergy and Growth</p>
        </div>
        <div className="Hero-Text Hero-Text-1">
          <p>Does your product require Digital Marketing?</p>
        </div>
        <div className="Hero-Text Hero-Text-2">
          <p>Our Digital Marketing Solutions</p>
          <p>
            can help boost your brand visibility and propel you to financial
            success.
          </p>
        </div>
        <div className="Hero-Text Hero-Text-3">
          <p>Your Dream, Our Expertise</p>
          <p>Before you realize it, you're already there !</p>
        </div>
        <div className="Hero-CTA">
          <p>Scroll down and See what we have to offer</p>
          <Link
            to="About"
            className="btn btn--accent"
            smooth={'easeInOutQuart'}
            duration={200}
            delay={0}
          >
            Go Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
