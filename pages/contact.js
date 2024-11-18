import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactUs = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} img={"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
      <section className="contact-info-area rel z-1 py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact-info-wrap rmb-75 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-two">Need Any Helps ?</span>
                  <h2>Contact For Information</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="row no-gap mt-50">
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-map-marker-alt" />
                      <h4>Locations</h4>
                      <span>BahalGarh, khewra, Road, Sonipat, Haryana 131021</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="far fa-envelope" />
                      <h4>Email Us</h4>
                      <span>
                        <a href="mailto:info@apexpath.com">info@apexpath.com</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-phone-volume" />
                      <h4>Hotlines</h4>
                      <span>
                        <a href="callto:+91 9991310732">+91 9991310732</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-page-image wow fadeInUp delay-0-4s">
                <img
                  src="https://omsoftsolution.com//wp-content/uploads/2023/07/contact.gif"
                  alt="Contact Page"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">coach</span>
      </section>
      {/* Contact Info End */}
      {/* Contact Form Start */}
      <section className="contact-form-area wow fadeInUp delay-0-2s">
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
          
              // Collect form data
              const fullName = document.getElementById("full-name").value;
              const email = document.getElementById("email-address").value;
              const phone = document.getElementById("phone").value;
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
            className="contact-form p-50 z-1 rel"
            name="contact-form"
            method="post"
          >
            <div className="section-title text-center mb-50">
              <span className="sub-title-two">Send Us Message</span>
              <h2>Have Any Questions! Say Hello</h2>
            </div>
            <div className="row mt-25">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-center mb-0">
                  <button type="submit" className="theme-btn">
                    send Message <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Form End */}
      {/* Location Map Area Start */}
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55855.70949897748!2d77.096798!3d28.958263000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dae77eed4d41f%3A0x78a0bc68e5af467!2sAshoka%20University!5e0!3m2!1sen!2sin!4v1731563645341!5m2!1sen!2sin"
            height={975}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
