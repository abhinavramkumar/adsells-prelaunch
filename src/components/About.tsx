import * as React from 'react';

interface IProps {}

const About = (props: IProps) => (
  <section className="section About" id="About">
    <div className="container">
      <div className="section-header">
        <h2>About Us</h2>
      </div>
      <div className="section-body is-text-centered">
        <p>
          An enterprise solely focused on transforming the 21st Century Start-Up
          generation into a Market Wonderland of established businesses, ADSELLS
          offers lucid and opportunistic solutions in marketing, value-oriented
          content and advertising in order to guide our clientele through their
          ascension to market success.
        </p>
        <p>
          Originally started in Delhi, India by a group of engineering students,
          today ADSELLS provides a lucrative harbor for creative brand
          recognition, market visibility and frugal solutions for swifter
          enterprise development.
        </p>
        <a className="btn is-mt-1 btn--accent" href="">
          Know us better
        </a>
      </div>
    </div>
  </section>
);

export default About;
