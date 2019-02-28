import * as React from 'react';

interface IProps {}

const Team = (props: IProps) => (
  <section className="section Team" id="Team">
    <div className="container">
      <div className="section-header">
        <h2>Our Core Team</h2>
      </div>
      <div className="section-body">
        <div className="Team__Members">
          <figure className="Team__Member">
            <div className="Team__Member-Image">
              <img src={'./assets/team1.jpg'} alt="Kushagra Gandhi" />
            </div>
            <figcaption className="Team__Member-Bio">
              <h4>Kushagra Gandhi</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </figcaption>
          </figure>

          <figure className="Team__Member">
            <div className="Team__Member-Image">
              <img src={'./assets/team2.jpg'} alt="Abhinav Ramkumar" />
            </div>
            <figcaption className="Team__Member-Bio">
              <h4>M. Ajay</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
