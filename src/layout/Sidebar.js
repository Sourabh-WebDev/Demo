import { Fragment, useState } from "react";
import { sidebarOnclick } from "../utils";
import { toast } from "react-toastify";
const Sidebar = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending email...");

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        sidebarOnclick();
      } else {
        const error = await response.json();
        toast.error(`${error.error}`);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <Fragment>
      <div className="form-back-drop" onClick={() => sidebarOnclick()} />

      {/* Hidden Sidebar */}

      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => sidebarOnclick()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>

          {/*Appointment Form*/}

          <div className="appointment-form">
            <form

              onSubmit={handleSubmit}
              id="contact-form"
              // className="contact-form p-50 z-1 rel"
              name="contact-form"
              method="post"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  onChange={handleChange}
                  value={formData.fullName}
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="Phone Number"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  value={formData.message} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>

          {/*Social Icons*/}

          <div className="social-style-one">
            <a href="https://www.twitter.com/apexpath">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com/apexpath/">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://in.linkedin.com/company/apexpath">
              <i className="fab fa-linkedin-in" />
            </a>
            {/* <a href="https://www.youtube.com/apexpath">
              <i className="fab fa-youtube" />
            </a> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Sidebar;
