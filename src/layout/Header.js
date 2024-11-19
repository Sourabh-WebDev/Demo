import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { sidebarOnclick, stickyNav } from "../utils";
import { Blog, Services } from "./Menu";
import MobileHeader from "./MobileHeader";

const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);
  const [navToggle, setNavToggle] = useState(false);
  switch (header) {
    case 1:
      return <Header1 navToggle={navToggle} setNavToggle={setNavToggle} />;
    case 3:
      return <Header3 navToggle={navToggle} setNavToggle={setNavToggle} />;
    case 4:
      return <Header4 navToggle={navToggle} setNavToggle={setNavToggle} />;

    default:
      return (
        <DefaultHeader navToggle={navToggle} setNavToggle={setNavToggle} />
      );
  }
};
export default Header;
const Header1 = ({ navToggle, setNavToggle }) => (
  <Fragment>
    <header className="main-header">
      {/* Header-Top */}
      <HeaderTop />
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-outer d-lg-flex align-items-center">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  {/* <div className="mobile-logo bg-green br-10 p-15">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div> */}

                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                    }`}
                >
                  <Menus />
                  <MobileHeader />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btn-sidebar d-flex align-items-center">
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <input type="search" placeholder="Search" required="" />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
              <button className="cart">
                <i className="fas fa-shopping-bag" />
              </button>
              <button>
                <i className="far fa-user-circle" />
              </button>
              {/* menu sidbar */}
              <div className="menu-sidebar" onClick={() => sidebarOnclick()}>
                <button>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*End Header Upper*/}
    </header>
  </Fragment>
),
  Header3 = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-three">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    {/* <div className="mobile-logo">
                      <Link href="/">
                        <a>
                          <img
                            src="assets/images/logos/logo-two.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div> */}
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                      }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btn-sidebar d-flex align-items-center">
                <div className="nav-search">
                  {/* <button className="fa fa-search" /> */}
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="hide"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="searchbox"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <button className="cart">
                  <i className="fas fa-shopping-bag" />
                </button>
                <button>
                  <i className="far fa-user-circle" />
                </button>
                {/* menu sidbar */}
                <div className="menu-sidebar" onClick={() => sidebarOnclick()}>
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Header4 = ({ navToggle, setNavToggle }) => (
    <header className="main-header header-four">
      {/* Header-Top */}
      {/* <div className="header-top bg-light-blue text-white">
        <div className="container-fluid">
          <div className="top-inner">
            <div className="top-left  ">
              <p>
                <i className="far fa-clock" /> <b>Working Hours</b> : Monday -
                Friday, 10am - 06pm
              </p>
              <p>
                <i className="fas fa-phone" /> <b>Hotline</b> :{" "}
                <a href="callto:+0522(345)6789"> +91 7290900835</a>
              </p>
            </div>
            <div className="top-right d-flex align-items-center">
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
              <ul className="top-menu">
                <li>
                  <Link href="/about">Setting &amp; Privacy</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      // height={50}
                      width={200}
                      src="assets/images/newweb/newLogo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/newweb/newLogo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                    }`}
                >
                  <Menus />
                  <MobileHeader />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns d-lg-flex d-none align-items-center">
              <div className="nice-select">
                <span className="">English</span>
                <ul className="list">
                  <li data-value="English" className="option selected focus">
                    English
                  </li>
                  <li data-value="Chinese" className="option">
                    Hindi
                  </li>
                  <li data-value="Arabic" className="option">
                    Arabic
                  </li>
                </ul>
              </div>

              <Link href="/contact">
                <a className="theme-btn text-nowrap">
                  Get a Free Quote <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  ),
  DefaultHeader = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-two">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        // height={120}
                        width={200}
                        src="assets/images/newweb/apexpath.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/* <select name="select-languages" id="select-languages">
                  <option value="English">Eng</option>
                  <option value="Spanish">Spa</option>
                  <option value="Chinese">Chi</option>
                  <option value="Arabic">Ara</option>
                </select> */}
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="logo">
                      <Link href="/">
                        <a>
                          <img
                            height={120}
                            src="assets/images/newweb/newLogo.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={() => setNavToggle(!navToggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                      }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btn-sidebar d-flex align-items-center">
                {/* <form onSubmit={(e) => e.preventDefault()} action="#">
                  <input type="search" placeholder="Search" required="" />
                  <button>
                    <i className="fas fa-search" />
                  </button>
                </form> */}
                {/* <button className="cart">
                  <i className="fas fa-shopping-bag" />
                </button> */}
                {/* <button>
                  <i className="far fa-user-circle" />
                </button> */}
                {/* menu sidbar */}
                <div className="menu-sidebar" onClick={() => sidebarOnclick()}>
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Menus = () => (
    <ul className="navigation clearfix d-none d-lg-flex">
      <li className="dropdown ">
        <a href="/">home</a>
        {/* <ul>
          <Home />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className="dropdown">
        <a href="#">Service</a>
        <ul style={{ minWidth: '900px', left: '-250px' }}>
          <Services />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="/contact">Contact Us</a>
        {/* <ul>
          <Pages />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
      <li className="dropdown">
        <a href="/blog">blog</a>
        {/* <ul>
          <Blog />
        </ul> */}
        {/* <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
    </ul>
  ),
  HeaderTop = () => (
    <div className="header-top bg-light-blue text-white">
      <div className="container-fluid">
        <div className="top-inner">
          <div className="top-left ">
            <p>
              <i className="far fa-clock" /> <b>Working Hours</b> : Monday -
              Friday, 9:30am - 07:00pm
            </p>
          </div>
          {/* <div className="top-right d-flex align-items-center">
            <div className="social-style-two">
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-instagram" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-pinterest-p" />
                </a>
              </Link>
            </div>
            <ul className="top-menu">
              <li>
                <Link href="/about">
                  <a>Setting &amp; Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <a>Faqs</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
