import { Fragment } from "react";
import { sidebarOnclick } from "../utils";
const Sidebar = () => {
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
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   sidebarOnclick();
              // }}
              // method="post"
              // action="#"
              onSubmit={(e) => {
                e.preventDefault();
  
                // Collect form data
                const fullName = document.getElementById("full-name").value;
                const email = document.getElementById("email-address").value;
                // const phone = document.getElementById("phone").value;
                const message = document.getElementById("message").value;
  
                // Construct mailto link
                const mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=Full Name: ${encodeURIComponent(
                  fullName
                )}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(
                  phone
                )}%0AMessage: ${encodeURIComponent(message)}`;
  
                // Trigger the email client
                window.location.href = mailtoLink;
              }}
              id="contact-form"
              // className="contact-form p-50 z-1 rel"
              name="contact-form"
              method="post"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
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
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Sidebar;
