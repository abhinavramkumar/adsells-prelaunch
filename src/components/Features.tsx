import * as React from 'react';
import {IFeature} from '../App';

interface IProps {
  features: Array<IFeature>;
}

const Features = ({features}: IProps) => (
  <section className="Features" id="Features">
    <div className="container">
      <div className="section-header">
        <h2>Features</h2>
      </div>
      <div className="section-body">
        <div className="Features__List">
          {features.map((feature, i) => (
            <div key={i} className="Feature__List-Item">
              <div
                className={
                  'Feature__List-Item-Images' +
                  (i % 2 === 0 ? ' order-2' : ' order-1')
                }
              >
                {feature.images.map((image, index) => {
                  return <img src={image} key={index} alt={index.toString()} />;
                })}
              </div>
              <div
                className={
                  'Feature__List-Item-Body' +
                  (i % 2 === 0 ? ' order-1' : ' order-2')
                }
              >
                {feature.description.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
