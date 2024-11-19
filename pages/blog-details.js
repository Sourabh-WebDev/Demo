import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Details"} img={" https://www.appliedart.com/assets/images/blog/_newsFeatured/blogging-SMB.png"} />
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="image mb-25 wow fadeInUp delay-0-2s">
                  <img src="assets/images/blog/blog-details.jpg" alt="Blog" />
                  <a href="#">
                    <i className="fas fa-share-alt" />
                  </a>
                </div>
                <ul className="blog-standard-header wow fadeInUp delay-0-2s">
                  <li>
                    <span className="name">Michael M. Morris</span>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />{" "}
                    <Link href="/blog-details">February 20, 2022</Link>
                  </li>
                  <li>
                    <i className="far fa-comments" />{" "}
                    <Link href="/blog-details">Comments (05)</Link>
                  </li>
                </ul>
                <div className="">
                  <img src="" />
                </div>
                <h3 className="title">
                  Getting Started with Web Development: A Beginner’s Guide
                </h3>
                <p>
                  <b>Overview:</b> Introduce the basics of web development, including the difference between front-end and back-end, common languages like HTML, CSS, and JavaScript, and how to set up a simple development environment.{" "}
                </p>
                <p>
                  <b>Key Points: </b>
                  Setting up a text editor (VS Code, Sublime).
                  Creating your first "Hello, World!" webpage.
                  Understanding client-server architecture.
                </p>
                <blockquote>
                  <h4>
                  The best way to get better at programming is to build things. Tinker with code, break it, fix it, and learn.
                  </h4>
                  <span className="blockquote-footer">Chris Coyier</span>
                </blockquote>
                {/* <p>
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue
                </p> */}
                <div className="tag-share pt-10">
                  <div className="tag-coulds pb-25">
                    <h6>Tags</h6>
                    <Link href="/blog">Course</Link>
                    <Link href="/blog">Design</Link>
                    <Link href="/blog">Marketing</Link>
                  </div>
                  <div className="social-style-two">
                    <h6>Share :</h6>
                    <Link href="/www.facebook.com/tricklesolutions">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/www.twitter.com/tricklesolutions">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/www.linkdin.com/tricklesolutions">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
                <div className="admin-comment text-white bg-light-blue p-40 br-10 mt-50 wow fadeInUp delay-0-2s">
                  <div className="comment-body mb-0">
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/admin-author.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="content">
                      <h4>Rasalina Wilimson</h4>
                      <p>
                        Apexpath are a technology driven and innovation oriented progressive company which provides a distinct platform that caters to a wide range of customers across the globe.
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atqu corruptie quos dolores et quas molestias excepturi
                        sint
                      </p>
                      <div className="social-style-two">
                        <Link href="/www.facebook.com/tricklesolutions">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="/www.twitter.com/tricklesolutions">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="/www.instagram.com/tricklesolutions">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="/www.behance.com/tricklesolutions">
                          <i className="fab fa-behance" />
                        </Link>
                        <Link href="/www.dribbble.com/tricklesolutions">
                          <i className="fab fa-dribbble" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-nav pt-60 pb-25">
                  <div className="prev-post wow fadeInLeft delay-0-2s">
                    <div className="post-thumb">
                      <Link href="/blog-details">
                        <img
                          src="assets/images/blog/post-nav-prev.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          How Deal With Back During Pregn
                        </Link>
                      </h6>
                      <span>
                        <i className="far fa-calendar-alt" /> 25 May 2022
                      </span>
                    </div>
                  </div>
                  <div className="next-post wow fadeInRight delay-0-2s">
                    <div className="post-thumb">
                      <Link href="/blog-details">
                        <img
                          src="assets/images/blog/post-nav-next.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Online Environme Work Older See
                        </Link>
                      </h6>
                      <span>
                        <i className="far fa-calendar-alt" /> 25 May 2022
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="comments pt-40 pb-30 wow fadeInUp delay-0-2s">
                  <h4 className="template-title mb-35">Peopel Comments</h4>
                  <ul className="comment-list">
                    <li>
                      <div className="comment-body">
                        <div className="author-thumb">
                          <img
                            src="assets/images/blog/comment-author1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="name-date">
                            <h6>John F. Medina</h6>
                            <span className="comment-date">25 Feb 2022</span>
                          </div>
                          <p>
                            Apexpath are a technology driven and innovation oriented progressive company which provides a distinct platform that caters to a wide range of customers across the globe.
                          </p>
                          <a href="#" className="reply-link">
                            Reply <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comment-body">
                            <div className="author-thumb">
                              <img
                                src="assets/images/blog/comment-author2.jpg"
                                alt="Image"
                              />
                            </div>
                            <div className="comment-content">
                              <div className="name-date">
                                <h6>Somalia D. Silva</h6>
                                <span className="comment-date">
                                  25 Feb 2022
                                </span>
                              </div>
                              <p>
                                Quis autem vel eum iure reprehenderit quin
                                voluptate velit esseeso quam nihile molestiae
                                consequatur veillum quolore
                              </p>
                              <a href="#" className="reply-link">
                                Reply{" "}
                                <i className="fas fa-long-arrow-alt-right" />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment-body">
                        <div className="author-thumb">
                          <img
                            src="assets/images/blog/comment-author3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="name-date">
                            <h6>Roger A. Torrence</h6>
                            <span className="comment-date">25 Feb 2022</span>
                          </div>
                          <p>
                            Quis autem vel eum iure reprehenderit quin voluptate
                            velit esseeso quam nihile molestiae consequatur
                            veillum quolore
                          </p>
                          <a href="#" className="reply-link">
                            Reply <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <form
                  onSubmit={(e) => e.preventDefault()}
                  id="comment-form"
                  className="comment-form p-50 bg-lighter wow fadeInUp delay-0-2s"
                >
                  <h4>Leave a Message</h4>
                  <p>Have any question? Ready to talk to us! </p>
                  <div className="row mt-25">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="blog-email"
                          name="blog-email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-30">
                      <div className="form-group">
                        <select name="subject" id="subject">
                          <option value="Subject">Subject</option>
                          <option value="Instructors">Instructors</option>
                          <option value="Pricing">Pricing</option>
                          <option value="Setting">Setting</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="fas fa-pencil-alt" />
                        </label>
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
                      <div className="form-group mb-0">
                        <div className="custom-control custom-radio mb-20">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="condition"
                            name="privacy"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="condition"
                          >
                            I Agree with the trams &amp; conditions
                          </label>
                        </div>
                        <button type="submit" className="theme-btn">
                          Send Message us
                          <i className="fas fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="text" placeholder="Search Here" required="" />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-about wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img src="assets/images/widgets/about.jpg" alt="Author" />
                  </div>
                  <h4>James D. Thomas</h4>
                  <p>
                    Apexpath are a technology driven and innovation oriented progressive company which provides a distinct platform that caters to a wide range of customers across the globe.
                    Sit amet consectetur adipiscing elits do eiusmod tempor
                    incididunt ut labore etdol magna aliquas uspensis.{" "}
                  </p>
                  <div className="social-style-two">
                    <Link href="/www.facebook.com/tricklesolutions">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/www.twitter.com/tricklesolutions">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/www.linkdin.com/tricklesolutions">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link href="/www.youtube.com/tricklesolutions">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="/blog">Business Coach </Link>{" "}
                      <span>(25)</span>
                    </li>
                    <li>
                      <Link href="/blog">Life Coach </Link> <span>(07)</span>
                    </li>
                    <li>
                      <Link href="/blog">Health Coach </Link> <span>(12)</span>
                    </li>
                    <li>
                      <Link href="/blog">Web Design </Link> <span>(55)</span>
                    </li>
                    <li>
                      <Link href="/blog">Web Development </Link>{" "}
                      <span>(14)</span>
                    </li>
                    <li>
                      <Link href="/blog">SEO Optimizations </Link>{" "}
                      <span>(30)</span>
                    </li>
                    <li>
                      <Link href="/blog">Digital Analysis </Link>{" "}
                      <span>(18)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recent-courses wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent Courses</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course1.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            How to Learn Basic Web (UI) Design
                          </Link>
                        </h6>
                        <span>
                          By <a href="#">Williams</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course2.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            How to Learn Basic Web Development
                          </Link>
                        </h6>
                        <span>
                          By <a href="#">Somalia</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course3.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            How to Learn Basic (SEO) Marketing
                          </Link>{" "}
                        </h6>
                        <span>
                          By <a href="#">Blanchard</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course4.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            Business Strategy Managements
                          </Link>
                        </h6>
                        <span>
                          By <a href="#">Johnson</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link href="/blog">Course</Link>
                    <Link href="/blog">Design</Link>
                    <Link href="/blog">Marketing</Link>
                    <Link href="/blog">Life Course</Link>
                    <Link href="/blog">Health Course</Link>
                    <Link href="/blog">SEO</Link>
                    <Link href="/blog">Business</Link>
                    <Link href="/blog">Graphics</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
