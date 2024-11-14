import Link from "next/link";
import Slider from "react-slick";
import Advertise from "../src/components/Advertise";
import Counter from "../src/components/Counter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { testimonialtwoSlider } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About us"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section pt-120 rpt-90">
        <div className="container">
          <div className="row align-items-center large-gap">
            <div className="col-lg-5">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title-two">About Us</span>
                  <h2>Domain expert developers with industry experience and passion for excellence.</h2>
                </div>
                {/* <p>
                  Sit amet consectetur adipiscing eiusmo tempor indun ut labore
                  et dolore magna aliquaes suspendisse ultrice gravid commodo
                  viverra maecenas accusan
                </p> */}
                <b>
                  ApexPath is a team of well-recognized software development experts focusing on improving business to develop their status with world-class software solutions and applications. We are a world-class company specializing in offering customized software solutions, including web-based application development, GIS application development, and website development. Our target customer range includes businesses from the automobile, E-Commerce, and GIS sectors, focusing on manufacturing products for labs, hospitals, and research centres. ApexPath combines skills for software developers with the technological expertise and experience to deliver business-grade solutions.
                  We offer customized software solutions with complete ownership of your software's source code and intellectual property.

                </b>
                <div className="about-btns pt-25">
                  <Link href="/about">
                    <a className="theme-btn my-15">
                      Learn more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <Link href="/faqs">
                    <a className="read-more">
                      How it works <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-page.png" alt="About" />
                <div className="circle-content">
                  <b>15+</b>
                  <span>Years Of Experience</span>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="counter-wrap style-two wow fadeInRight delay-0-4s">
                <div className="success-item">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={256}
                  >
                    <Counter end={256} />
                  </span>
                  <span>Enrolled Learner</span>
                </div>
                <div className="success-item">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop="2.36"
                  >
                    <Counter end={2.36} decimals={2} />
                  </span>
                  <span>Finished Session</span>
                </div>
                <div className="success-item">
                  <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop={99}
                  >
                    <Counter end={99} />
                  </span>
                  <span>Saticfaction Rate</span>
                </div>
                <div className="success-item">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={83}
                  >
                    <Counter end={83} />
                  </span>
                  <span>Awards Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      <section className="features-section-three rel z-1 pt-110 rpt-85 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title-two">How About Learn Us</span>
            <h2>Opportunity for Online Learning</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-reading-book" />
                </div>
                <h4>Experts Minds</h4>
                <p>
                  Apexpath are a technology  Our Mission is to provide best and innovative IT and Software solutions to current industry and user needs.
                </p>
                <Link href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/features/icon7.png" alt="Icon" />
                </div>
                <h4>Multiple Courses</h4>
                <p>
                  Apexpath are a technology Sed ut persiciatis omnis natus voluptate accsantie doloreue
                  laudantium
                </p>
                <Link href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/features/icon8.png" alt="Icon" />
                </div>
                <h4>Hire Quickly</h4>
                <p>
                  Apexpath are a technology Sed ut persiciatis omnis natus voluptate accsantie doloreue
                  laudantium
                </p>
                <Link href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="assets/images/features/icon9.png" alt="Icon" />
                </div>
                <h4>Video Tutorials</h4>
                <p>
                  Apexpath has a large pool of top IT professionals with a collective approach of a team as a whole. We mainly abide by the concept of synergy effect & focus on bringing out the best of our outputs for the satisfaction of our customers.
                </p>
                <Link href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}
      {/* Team Section Start */}
      <section className="team-setion-two bg-lighter rel z-1 pt-120 rpt-90 pb-70 rpb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title-two">Meet Our Team</span>
                <h2>We’ve Thousands Of Experience Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/teams/team1.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>David S. Wickman</h4>
                  <span>Wed Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/teams/team2.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>Walter J. Drake</h4>
                  <span>Wed Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/teams/team3.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>Steven J. Voorhees</h4>
                  <span>Wed Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img src="assets/images/teams/team4.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>Herman C. Kennedy</h4>
                  <span>Wed Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/teams/team5.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>Nathan A. Browning</h4>
                  <span>Business Consultant</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/teams/team6.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>Carmine M. Allen</h4>
                  <span>Senior Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/teams/team7.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>Rubin R. Nelligan</h4>
                  <span>Wed Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img src="assets/images/teams/team8.jpg" alt="Team Member" />
                  <div className="social-style-two">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
                <div className="member-description">
                  <h4>Jimmy T. Briley</h4>
                  <span>Programmer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}
      {/* Advertise Area Start */}
      <section className="advertise-area pt-130 rpt-100 pb-90 rpb-60">
        <div className="container">
          <Advertise />
        </div>
      </section>
      {/* Advertise Area End */}
      {/* Why Learn Start */}
      <section className="why-learn-area pb-120 rpb-100">
        <div className="container">
          <div className="row align-items-center large-gap wow fadeInLeft delay-0-2s">
            <div className="col-lg-6">
              <div className="why-learn-content rmb-35">
                <div className="section-title mb-30">
                  <span className="sub-title-two">Why Learn Us</span>
                  <h2> OUR MISSION </h2>
                </div>
                <p>
                </p>
                <div className="why-learn-feature pt-30">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="assets/images/features/icon10.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Expert Advisors</h4>
                        <p>
                          Team Apexpath  is a focused, dynamic and  progressive group, providing customers with value added products,
                          services and innovative solution. The group has collaborated with global technology leaders & has 10 associate partners.
                        </p>
                        <Link href="/about">
                          <a className="read-more color-two">
                            Read more <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="assets/images/features/icon11.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Popular Courses</h4>
                        <p>
                          Team Apexpath  is a focused, dynamic and  progressive group,
                          providing customers with value added products, services and innovative solution.
                          The group has collaborated with global technology leaders & has 10 associate partners.
                        </p>
                        <Link href="/about">
                          <a className="read-more color-two">
                            Read more <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-learn-image wow fadeInRight delay-0-2s">
                <img src="assets/images/about/why-learn.jpg" alt="Why Learn" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Learn End */}
      {/* Testimonials Section Start */}
      <section className="testimonials-section-two my-80 rel z-1 wow fadeInUp delay-0-2s">
        <div className="container">
          <Slider {...testimonialtwoSlider} className="testimonial-two-wrap">
            <div className="testimonial-item-two">
              <div className="testimonial-author-two">
                <img
                  src="assets/images/testimonials/testimonial-two2.jpg"
                  alt="Author"
                />
              </div>
              <div className="testimonial-content-two">
                <div className="designation">
                  <h3>Munna Bhakta</h3>
                  <span>Director</span>
                </div>
                <p>
                  Apexpath has a large pool of top IT professionals with a collective approach of a team as a whole. We mainly abide by the concept of synergy effect & focus on bringing out the best of our outputs for the satisfaction of our customers.
                </p>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="testimonial-item-two">
              <div className="testimonial-author-two">
                <img
                  src="assets/images/testimonials/testimonial-two1.jpg"
                  alt="Author"
                />
              </div>
              <div className="testimonial-content-two">
                <div className="designation">
                  <h3>Daniel E. Yager</h3>
                  <span>Business Manager</span>
                </div>
                <p>
                  Apexpath has the ability to provide you any type of Internet service and solutions that you need. Whether you need an attractive website design or complex multi-tier internet system development, custom programming or web based promotions using latest technologies and industry trends, Apexpath Technologies has the required experience and expertise to do it all at competitive prices with shorter time span.
                </p>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="testimonial-item-two">
              <div className="testimonial-author-two">
                <img
                  src="assets/images/testimonials/testimonial-two3.jpg"
                  alt="Author"
                />
              </div>
              <div className="testimonial-content-two">
                <div className="designation">
                  <h3>Stewart R. Platt</h3>
                  <span>Business Manager</span>
                </div>
                <p>
                  Apexpath has a large pool of top IT professionals with a collective approach of a team as a whole. We mainly abide by the concept of synergy effect & focus on bringing out the best of our outputs for the satisfaction of our customers.
                </p>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Testimonials Section End */}
      {/* Partner Section Start */}
      <section className="partner-section rel z-1 pt-120 rpt-90 pb-75 rpb-55">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="categories-content mb-50 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-two">Global Partners</span>
                  <h2>We’ve More Then 235+ Global Partners</h2>
                </div>
                <Link href="/about">
                  <a className="read-more mt-5">
                    View more partners <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="logo-inner style-two wow fadeInLeft delay-0-2s">
                <div className="logo-item">
                  <Link href="/about">
                    <img
                      src="assets/images/client-logos/client-logo-two1.png"
                      alt="Client Logo"
                    />
                  </Link>
                </div>
                <div className="logo-item">
                  <Link href="/about">
                    <img
                      src="assets/images/client-logos/client-logo-two2.png"
                      alt="Client Logo"
                    />
                  </Link>
                </div>
                <div className="logo-item">
                  <Link href="/about">
                    <img
                      src="assets/images/client-logos/client-logo-two3.png"
                      alt="Client Logo"
                    />
                  </Link>
                </div>
                <div className="logo-item">
                  <Link href="/about">
                    <img
                      src="assets/images/client-logos/client-logo-two4.png"
                      alt="Client Logo"
                    />
                  </Link>
                </div>
                <div className="logo-item">
                  <Link href="/about">
                    <img
                      src="assets/images/client-logos/client-logo-two5.png"
                      alt="Client Logo"
                    />
                  </Link>
                </div>
                <div className="logo-item">
                  <Link href="/about">
                    <img
                      src="assets/images/client-logos/client-logo-two6.png"
                      alt="Client Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
