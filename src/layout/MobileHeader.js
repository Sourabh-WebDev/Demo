import Link from "next/link";
import { useState } from "react";
import { Blog, Courses, Home, Pages, Services } from "./Menu";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown current">
        <a href="#">home</a>
        <ul style={activeLi("home")}>
          <Home />
        </ul>
      
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li className="dropdown">
        <a href="#">Service</a>
        <ul style={activeLi("Courses")}>
          <Services />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Courses")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
  
      <li className="dropdown">
       <Link href= "./contact">Contact-Us</Link>
      </li>

      <li className="dropdown">
        <a href="#">blog</a>
        <ul style={activeLi("Blog")}>
          <Blog />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Blog")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
    </ul>
  );
};
export default MobileHeader;
