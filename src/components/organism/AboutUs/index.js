import React from "react";
import About from "../../../assets/images/about.jpg";
import Photography from "../../../assets/images/photography.jpg";
import Photography2 from "../../../assets/images/photography2.jpg";
import { Button } from "../../atom";

const AboutUs = (props) => {
  return (
    <>
      <div className="container aboutus">
        <div className="row mt-5">
          <div className="col-md-6 img">
            <div className="img-wrapper">
              <img src={About} alt="" />
            </div>
          </div>
          <div className="col-md-6 desc align-self-center">
            <div className="content">
              <div className="title">
                <h2 className="fw-bold">About Us</h2>
              </div>
              <div className="body align-bottom">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row  mt-5">
          <div className="col-md-6 desc align-self-center">
            <div className="content">
              <div className="title">
                <h2 className="fw-bold">Photography</h2>
              </div>
              <div className="body align-bottom me-5">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur{" "}
                </p>
                <Button className="btn btn-lg mb-5" isSecondary>
                  View All
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 img mb-5">
            <div className="img-wrapper">
              <img src={Photography} alt="" />
            </div>
            <div className="img-wrapper potrait">
              <img src={Photography2} alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 img">
            <div className="img-wrapper">
              <img src={About} alt="" />
            </div>
          </div>
          <div className="col-md-6 desc align-self-center mt-5">
            <div className="content">
              <div className="title">
                <h2 className="fw-bold">Videography</h2>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur{" "}
                </p>
                <Button className="btn btn-lg" isSecondary>
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
