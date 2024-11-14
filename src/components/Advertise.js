import Link from "next/link";
import advertise1 from "/public/assets/images/advertise/1.png";
import advertise2 from "/public/assets/images/advertise/2.png";
const Advertise = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="advertise-item wow fadeInUp delay-0-2s">
          <div className="content">
            <h4>Become An Employee?</h4>
            <p>
              We're looking for dedicated individuals to join our team, bringing their skills and passion to fuel our company's success.
            </p>
            <Link href="/contact">
              <a className="theme-btn">
                Join with us <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
          <div className="image">
            <img src={advertise1.src} alt="Advertise" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="advertise-item bg-two wow fadeInUp delay-0-4s">
          <div className="content">
            <h4>Get Our Services</h4>
            <p>
              Our services encompass a wide range of solutions designed to meet your specific needs and drive success in your business.
            </p>
            <Link href="/contact">
              <a className="theme-btn style-two">
                Our Services <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
          <div className="image">
            <img src={advertise2.src} alt="Advertise" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advertise;
