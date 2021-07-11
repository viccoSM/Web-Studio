import React from "react";
import "./index.scss";

const Slider = ({ data }) => {
  return (
    <div className="img-wrapper">
      <img className="img-fluid" src={data.imgUrl} />
      {/* {data.map((img, index) => {
        return <img className="img-slide" key={index} src={img.imgUrl} />;
      })} */}
    </div>
  );
};

export default Slider;
