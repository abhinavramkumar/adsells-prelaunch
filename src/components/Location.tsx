import * as React from 'react';

interface IProps {}

const Location = (props: IProps) => (
  <section className="Location" id="Location">
    <div className="container">
      <div className="section-header">
        <h2>Come Meet Us in Person</h2>
      </div>
    </div>

    <div className="Location__Map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.585062660737!2d77.61441931422165!3d12.934369219195222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14502a57ce59%3A0xa39bac30f94984d!2sIncubex+KRM!5e0!3m2!1sen!2sin!4v1486376091283"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{border: '0'}}
        allowFullScreen={true}
      />
    </div>
  </section>
);

export default Location;
