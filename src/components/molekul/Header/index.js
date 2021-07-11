import React from "react";
import { Button, Logo } from "../../atom";

import Hamburger from "../../../assets/images/Hamburger.svg";

const Header = () => {
  return (
    <nav className="container navbar-expand-lg d-flex">
      <div className="container-fluid d-flex justify-content-between">
        <Logo href="/" />
        <Button className="btn navbar-toggler">
          <img src={Hamburger} color />
        </Button>
      </div>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <Button className="nav-link me-4" type="link" href="/about">
            About
          </Button>
          <Button className="nav-link me-4" type="link" href="/contact">
            Contact
          </Button>
          <Button className="nav-link me-4" type="link" href="/portfolio">
            Portfolio
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
