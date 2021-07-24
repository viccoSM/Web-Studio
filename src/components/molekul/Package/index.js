import React from "react";
import photography from "../../../assets/images/photography.png";
import videography from "../../../assets/images/videography.png";
import complete from "../../../assets/images/complete.png";
import "./index.scss";
import { Button } from "../../atom";

const Package = () => {
  return (
    <div className="package card text-center shadow p-3 border-0 rounded">
      <h3 className="fw-bold">Package</h3>
      <div className="card-body d-flex flex-wrap justify-content-between ps-5 pe-5">
        <div className="item">
          <img src={photography} alt="" />
          <Button className="nav-link" type="link" style={{ color: "black" }}>
            Photography
          </Button>
        </div>
        <div className="item">
          <img src={videography} alt="" />
          <Button className="nav-link" type="link" style={{ color: "black" }}>
            Videography
          </Button>
        </div>
        <div className="item">
          <img src={complete} alt="" />
          <Button className="nav-link" type="link" style={{ color: "black" }}>
            Complete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Package;
