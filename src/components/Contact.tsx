import * as React from 'react';

interface IProps {}

const Contact = (props: IProps) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  const formReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="section Contact" id="Contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us Now</h2>
        </div>
        <div className="section-body">
          <form
            className="Contact__Form"
            action=""
            onSubmit={formSubmit}
            onReset={formReset}
          >
            <div className="form-group">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <input
                className="input"
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setPhone(e.currentTarget.value)
                }
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                className="textarea"
                id="message"
                name="message"
                value={message}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  setMessage(e.currentTarget.value)
                }
              />
            </div>
            <div className="form-group form-group--pull-right">
              <button type="reset" className="btn">
                reset
              </button>
              <button className="btn btn--accent" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
