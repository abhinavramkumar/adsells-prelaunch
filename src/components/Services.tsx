import * as React from 'react';
import {IService} from '../App';

interface IProps {
  services: Array<IService>;
}

const Services = ({services}: IProps) => (
  <section className="section Services" id="Services">
    <div className="container">
      <div className="section-header">
        <h2>Services</h2>
      </div>
      <div className="section-body">
        <div className="Services__Grid">
          {services.map((service, index) => (
            <div className="Service__Item" key={index}>
              <div className="Service__Item-Image">
                <img src={service.url} alt={service.name} />
              </div>
              <div className="Service__Item-Cover is-text-centered">
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
