import Link from "next/link";
import Slider from "react-slick";
import Advertise from "../src/components/Advertise";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import { coachSlider } from "../src/sliderProps";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
const Index = () => {

  const images = [
    'assets/images/hero/robot.png',
    'assets/images/hero/sps.png',
    'assets/images/hero/cmp.png',
    'assets/images/hero/rbs.png',
    'assets/images/hero/CHS.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 60 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Layout header={4} footer={4}>
      <section className="hero-section-three bg-lighter rel z-1 pt-150 rpt-150">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6 align-self-end">
              <div className="hero-three-image-part">
                {/* <img src="assets/images/hero/robot.png" alt="Hero" /> */}
                {images.map((src, index) =>
                  index === currentIndex ? (
                    <img
                      key={index}
                      src={src}
                      alt={`Slide ${index}`}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  ) : (
                    <img
                      key={index}
                      src={src}
                      alt={`Slide ${index}`}
                      style={{ display: 'none' }}
                    />
                  )
                )}
                {/* <div className="hero-chart wow fadeInUp delay-0-2s">
                  <img height={100} src="assets/images/Satisfy-Work.png" alt="Chart" />
                  <h5>99% Satisfy Work</h5>
                </div> */}
                <div className="hero-over-text">
                  {/* <div className="about-image-over-item wow fadeInRight delay-0-2s">
                    <img src="assets/images/about/icon1.png" alt="Icon" />
                    <h5>Experienced Developers</h5>
                  </div> */}
                  {/* <div className="about-image-over-item wow fadeInLeft delay-0-2s">
                    <img height={30} width={30} src="assets/images/Quality-Icon.png" alt="Icon" />
                    <h5>Quality Websites</h5>
                  </div> */}
                </div>
                <img
                  className="hero-circle"
                  src="assets/images/shapes/circle-dots-two.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="hero-content-three pt-10 pb-100 rpt-40">
                <span className="hero-sub-title mb-10 wow fadeInUp delay-0-2s">
                  <span>2563+</span> Happy Customers
                </span>
                <h1 className="mb-25 wow fadeInUp delay-0-4s">
                  WE'RE SOFTWARE
                  {" "}<br/> <span>
                    <Typewriter
                      options={{
                        strings: ["DEVELOPMENT", "INNOVATION", "SOLUTIONS"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>{" "}<br/> COMPANY
                </h1>
                <p>Though time brings suffocation to business. Your business may need fresh oxygen in terms of new creative website.</p>
                <ul className="list-style-one wow fadeInUp delay-0-6s">
                  <li>Expert's Choice</li>
                  <li>538+ Websites</li>
                </ul>
                <div className="hero-btns mt-10 wow fadeInUp delay-0-8s">
                  {/* <Link href="/contact">
                    <a className="theme-btn mt-10">
                      Free Quote <i className="fas fa-arrow-right" />
                    </a>
                  </Link> */}
                  {/* <Link href="/course-grid">
                    <a className="theme-btn style-two mt-10">
                      our websites <i className="fas fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hero-rectangle"
          src="assets/images/shapes/rectangle-dots-two.png"
          alt="Shape"
        />
        <div className="hero-circles-one wow fadeInUpRight delay-0-4s" />
        <div className="hero-circles-two wow fadeInUpRight delay-0-2s" />
      </section>
      {/* Hero Section End */}
      {/* Feature Section Start */}
      <section className="freature-section-six pt-120 rpt-90 pb-90 rpb-60">
        <div className="container">
          <div className="row large-gap mb-30">
            <div className="col-lg-6">
              <div className="freature-six-left wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title-three">Who we are</span>
                  <h2>
                  Leading Web And App design & <span>Development</span> Company
                    {/* Experience Our Best <span>Services</span> */}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="freature-six-right pt-55 rpt-0 wow fadeInUp delay-0-4s">
                <p>
                  Experience the pinnacle of website services with our expert team. We offer innovative design, flawless functionality, and top-notch customer support to ensure your online presence exceeds all expectations. Join us today and witness your digital dreams come to life like never before.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-six-item mt-30 wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon">
                    <img
                      src="assets/images/categories/icon2.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>User-Centric Design</h5>
                  <p>
                    We craft websites with a focus on user experience, ensuring they are visually appealing, easy to navigate, and responsive on all devices.
                  </p>
                </div>
                {/* <Link href="/about">
                  <a className="read-more color-two">
                    raed more <i className="fas fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-six-item wow fadeInUp delay-0-4s">
                <div className="content">
                  <div className="icon">
                    <img
                      src="assets/images/features/feature-five-icon2.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>Functionality and Performance</h5>
                  <p>
                    Our websites are built with robust functionality and optimized performance, providing fast loading times and seamless interactivity.
                  </p>
                </div>
                {/* <Link href="/about">
                  <a className="read-more color-two">
                    raed more <i className="fas fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-six-item mt-30 wow fadeInUp delay-0-6s">
                <div className="content">
                  <div className="icon">
                    <img
                      src="assets/images/features/feature-five-icon3.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>Search Engine Optimization (SEO)</h5>
                  <p>
                    We implement effective SEO strategies to help our customers' websites rank higher in search engine results, driving organic traffic and increasing visibility.
                  </p>
                </div>
                {/* <Link href="/about">
                  <a className="read-more color-two">
                    raed more <i className="fas fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-six-item wow fadeInUp delay-0-8s">
                <div className="content">
                  <div className="icon">
                    <img
                      src="assets/images/categories/icon4.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>Ongoing Support and Maintenance</h5>
                  <p>
                    We provide continuous support and maintenance services to keep the website secure, up-to-date, and functioning smoothly, offering peace of mind to our customers.
                  </p>
                </div>
                {/* <Link href="/about">
                  <a className="read-more color-two">
                    raed more <i className="fas fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section End */}
      {/* Top websites */}
      <section className="coach-section-three bg-lighter rel z-1 pt-180 rpt-150 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-45">
                <h2>
                  OUR SPECIALIZED <span>SERVICE​</span>
                </h2>
              </div>
            </div>
          </div>
          <Slider {...coachSlider} className="coach-slider">
            <div className="coach-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/newweb/softwareDev.jpg" alt="Coach" />
              </div>
              <div className="content">
                <h4>Software Development Solutions​</h4>
                <p>
                  <Link href="/software-development">
                    Outdated software prevents business growth. Our experts implement latest tools like ReactJS, NodeJS, and more to create powerful, responsive solutions.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/GIS.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>GIS Application Development​</h4>
                <p>
                  <Link href="/gis-App-development">
                    Businesses struggle to attract global customers without accurate mapping. Our expertise in QGIS, Mapbox, and more ensures precise integration.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/Database.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Database Management​</h4>
                <p>
                  <Link href="/database-mgmt">
                    ApexPath uses the latest database software to perform web scraping, Database Management, data extraction, and data analysis using advanced DBMS tools.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/NFT.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Blockchain technology​</h4>
                <p>
                  <Link href="/blockchain-development">
                    Our experts have deployed blockchain technologies across a range of industries, working with NFT marketplaces, DeFi services and more to build secure and efficient solutions.
                  </Link>
                </p>

              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* About Start */}
      <section className="about-four-section pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-four-content rmb-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-three">About ApexPath</span>
                  <h2>
                    Know <span>Something</span> About Our Company at
                    ApexPath
                  </h2>
                </div>
                <p>
                  We are a global leader in Digital Transformation, offering comprehensive solutions that empower enterprises to thrive in the modern digital landscape. With the seismic shift brought by Digital Transformation, we understand that it goes beyond mere technology adoption..{" "}
                </p>
                <ul className="list-style-four pt-5 pb-35">
                  <li>Best Designer &amp; Best Developer</li>
                  <li>100% ISO Certified Gruentee</li>
                </ul>
                <Link href="/about">
                  <a className="theme-btn style-three">
                    Learn more <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four-right-part mt-10 wow fadeInRight delay-0-2s">
                <img
                  className="image-one"
                  src="assets/images/about/about-four1.jpg"
                  alt="About"
                />
                <img
                  className="image-two"
                  src="assets/images/about/about-four2.jpg"
                  alt="About"
                />
                <div className="saticfiction bg-green br-5 text-white">
                  <span className="counter-number">
                    <span />
                    <img height={100} src="assets/images/Satisfy-Work.png" alt="Chart" />
                  </span>
                  <h4>99% satisfied Customers</h4>
                </div>
                <div className="experience text-white bg-light-blue br-5">
                  <i className="fas fa-graduation-cap" />
                  <h5>Experienced Developer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
      {/* Counter Start */}
      <div className="counter-section-three">
        <div className="container">
          <div className="counter-three-wrap bg-light-blue text-white">
            <div className="success-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={256}
              >
                <Counter end={256} />
              </span>
              <span>
                Successful
                <br />
                Projects
              </span>
            </div>
            <div className="success-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={2456}
              >
                <Counter end={487} />
              </span>
              <span>
                Happy
                <br />
                Customers
              </span>
            </div>
            <div className="success-item">
              <span
                className="count-text percent"
                data-speed={3000}
                data-stop="99.9"
              >
                <Counter end={99.9} />
              </span>
              <span>
                Success
                <br />
                Ratio
              </span>
            </div>
            <div className="success-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={2563}
              >
                <Counter end={15} />
              </span>
              <span>
                Year of
                <br />
                Experience
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Counter End */}
      {/* Coach Section Start */}
      <section className="coach-section-three bg-lighter rel z-1 pt-180 rpt-150 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-45">
                <h2>
                  OUR COMPANY <span>SERVICE​</span>
                </h2>
              </div>
            </div>
          </div>
          <Slider {...coachSlider} className="coach-slider">
            <div className="coach-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/newweb/softwareDev.jpg" alt="Coach" />
              </div>
              <div className="content">
                <h4>Software Development​</h4>
                <p>
                  <Link href="/course-details">
                    We offer flexible and extensible applications that are tailor-made to improve the flexibility to provide choice for you during software development.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/AppDev.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Desktop Application Development​</h4>
                <p>
                  <Link href="/course-details">
                    Customer-based desktop application designs for effective functioning and comfort.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/WebApp.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Web Application Development​</h4>
                <p>
                  <Link href="/course-details">
                    Drive your business forward with customized web-based development services.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/MobAppDev.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Mobile Application Development​​</h4>
                <p>
                  <Link href="/course-details">
                    We deliver scalable and budget-friendly mobile app development services for all digital products.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/GIS.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>GIS Application Development​</h4>
                <p>
                  <Link href="/gis-App-development">
                    Customize your current GIS platform with required modules and compilations.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/programming.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Web Scraping</h4>
                <p>
                  <Link href="/course-details">
                    Extract critical data from various parts of the internet for advanced analysis and business development.​ Get the web data you need with accuracy and value.
                  </Link>
                </p>
              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/ImgEffect.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Image Editing​</h4>
                <p>
                  <Link href="/course-details">
                    High-quality photo editing techniques from experts with detailed knowledge of the latest software. Attached is quality image editing for realtors.
                  </Link>
                </p>

              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img style={{ height: "279px" }} src="assets/images/newweb/DataPro.jpg" alt="Coach" />
                {/* <div className="price">256</div> */}
              </div>
              <div className="content">
                <h4>Data processing from social media​</h4>
                <p>
                  <Link href="/course-details">
                    Advanced and social media analysis for risk management and market developments.
                  </Link>
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <section className="coach-section-three bg-lighter rel z-1 pt-180 rpt-150 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-45">
                <h2>
                  Best Solutions For <span>Your Business</span> in Online Era
                </h2>
              </div>
            </div>
          </div>
          <Slider {...coachSlider} className="coach-slider">
            <div className="coach-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/coachs/course-three1.jpg" alt="Coach" />
                <div className="price">256</div>
              </div>
              <div className="content">
                <ul className="coach-footer">
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>25 seats</span>
                  </li>
                </ul>
                <h4>
                  <Link href="/course-details">
                    Learn How to Learn Basic Web Design (UX/UI)
                  </Link>
                </h4>
                <div className="author">
                  <img
                    src="assets/images/coachs/course-author-three1.png"
                    alt="Author"
                  />
                  <h6>Richard L. Ramsey</h6>
                </div>
              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/coachs/course-three2.jpg" alt="Coach" />
                <div className="price">0.0</div>
              </div>
              <div className="content">
                <ul className="coach-footer">
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>25 seats</span>
                  </li>
                </ul>
                <h4>
                  <Link href="/course-details">
                    Learn How to Learn Basic Web Development
                  </Link>
                </h4>
                <div className="author">
                  <img
                    src="assets/images/coachs/course-author-three2.png"
                    alt="Author"
                  />
                  <h6>Jason M. Parker</h6>
                </div>
              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/coachs/course-three3.jpg" alt="Coach" />
                <div className="price">306</div>
              </div>
              <div className="content">
                <ul className="coach-footer">
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>25 seats</span>
                  </li>
                </ul>
                <h4>
                  <Link href="/course-details">
                    Learn How Learn Advance Web Development
                  </Link>
                </h4>
                <div className="author">
                  <img
                    src="assets/images/coachs/course-author-three3.png"
                    alt="Author"
                  />
                  <h6>Richard L. Ramsey</h6>
                </div>
              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/coachs/course-three1.jpg" alt="Coach" />
                <div className="price">256</div>
              </div>
              <div className="content">
                <ul className="coach-footer">
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>25 seats</span>
                  </li>
                </ul>
                <h4>
                  <Link href="/course-details">
                    Learn How to Learn Basic Web Design (UX/UI)
                  </Link>
                </h4>
                <div className="author">
                  <img
                    src="assets/images/coachs/course-author-three1.png"
                    alt="Author"
                  />
                  <h6>Richard L. Ramsey</h6>
                </div>
              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/coachs/course-three2.jpg" alt="Coach" />
                <div className="price">0.0</div>
              </div>
              <div className="content">
                <ul className="coach-footer">
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>25 seats</span>
                  </li>
                </ul>
                <h4>
                  <Link href="/course-details">
                    Learn How to Learn Basic Web Development
                  </Link>
                </h4>
                <div className="author">
                  <img
                    src="assets/images/coachs/course-author-three2.png"
                    alt="Author"
                  />
                  <h6>Jason M. Parker</h6>
                </div>
              </div>
            </div>
            <div className="coach-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/coachs/course-three3.jpg" alt="Coach" />
                <div className="price">306</div>
              </div>
              <div className="content">
                <ul className="coach-footer">
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>25 seats</span>
                  </li>
                </ul>
                <h4>
                  <Link href="/course-details">
                    Learn How Learn Advance Web Development
                  </Link>
                </h4>
                <div className="author">
                  <img
                    src="assets/images/coachs/course-author-three3.png"
                    alt="Author"
                  />
                  <h6>Richard L. Ramsey</h6>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}

      {/* Testimonial Area End */}
      {/* Advertise Area Start */}
      <section className="advertise-area pb-100 pt-100 rpb-70">
        <div className="container">
          <Advertise />
        </div>
      </section>
      {/* Advertise Area End */}
      {/* Newsletter Section Start */}
      {/* <section className="newsletter-video-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-10">
              <div
                className="newsletter-video-part overlay p-100 rp-50 wow fadeInRight delay-0-2s"
                style={{
                  backgroundImage:
                    "url(assets/images/video/newslatter-video-bg.jpg)",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="notification br-5 bg-white text-center">
                  <img
                    src="assets/images/shapes/notification.png"
                    alt="Notification"
                  />
                  <div className="content">
                    <h4>Get Our Online Courses</h4>
                  </div>
                </div>
                <span className="bg-text">Video</span>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="newsletter-video-content bg-light-blue text-white wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title-two mb-15">Our Newsletter</span>
                  <h2>
                    Get Our Every <span>Single</span> Notifications
                  </h2>
                </div>
                <p>
                  Sit amet consectetur adipiscinelit eiusmod tempor incididunt
                  ut labore et dolore magna aliqua suspendisse ultrices gravida.
                  commodo viverra maecenas accumsan facilisis.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="newsletter-form mt-25"
                  action="#"
                >
                  <div className="newsletter-radios mb-25">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="hero-wekly"
                        name="example1"
                        defaultChecked=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="hero-wekly"
                      >
                        Regular Updates
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="hero-monthly"
                        name="example1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="hero-monthly"
                      >
                        Weekly Updates
                      </label>
                    </div>
                  </div>
                  <div className="newsletter-email">
                    <label htmlFor="email">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <button type="submit" className="theme-btn">
                      sign up <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Newsletter Section End */}
      {/* Blog Section Start */}
      {/* <section className="blog-section pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-70">
            <span className="sub-title-two"> Our Customers Say </span>
            <h2>
              <span>Testimonial</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item style-two middle-image wow fadeInUp delay-0-4s">
                <h4>
                  <Link href="/blog-details">
                    Outstanding Customer Support and Innovation
                  </Link>
                </h4>
                <ul className="blog-meta">
                  <p>"We’ve been working with ApexPath for over a year, and their dedication to customer support is unmatched. Not only did they deliver a solution that met our specific requirements, but they also continue to innovate and offer new features that add value to our business. The team listens to feedback and is quick to implement changes. It’s refreshing to work with a company that genuinely cares about our success."</p>
                </ul>
                <a className="read-more">
                  Sarah M., Operations Manager
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item style-two middle-image wow fadeInUp delay-0-2s">
                <h4>
                  <Link href="/blog-details">
                    Increased Efficiency and Streamlined Processes
                  </Link>
                </h4>
                <ul className="blog-meta">
                  <p>"The software solutions provided by ApexPath have significantly improved our operational efficiency. With their customized tools, we’ve been able to streamline processes that used to take hours into tasks that now take minutes. The team is responsive and truly understands our business needs. I highly recommend ApexPath for anyone looking to optimize their workflow and maximize productivity!"</p>
                </ul>
                <a className="read-more">
                  John D., IT Director
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item style-two middle-image wow fadeInUp delay-0-6s">
                <h4>
                  <Link href="/blog-details">
                    Reliable, Scalable, and Cost-Effective
                  </Link>
                </h4>
                <ul className="blog-meta">
                  <p>
                    "Switching to ApexPath’s platform was one of the best decisions we’ve made. Their software is both reliable and scalable, which has allowed us to grow without worrying about outgrowing our tools. The pricing is fair and transparent, with no hidden costs. We feel confident that ApexPath is a partner in our growth and not just another vendor."
                  </p>
                </ul>
                <a className="read-more">
                  Emily L., CEO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default Index;
