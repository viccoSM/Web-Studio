import React, { useEffect, useState } from "react";
import "./index.scss";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideNext = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
      console.log(slideIndex);
    } else if (slideIndex === data.length) {
      setSlideIndex(0);
    }
  };
  // const autoPlay = true;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (slideIndex !== data.length) {
  //       setSlideIndex(slideIndex + 1);
  //     } else if (slideIndex === data.length) {
  //       setSlideIndex(0);
  //     }
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [slideIndex, autoPlay]);

  return (
    <div className="img-wrapper">
      {/* <img className="img-fluid" src={data.imgUrl} /> */}
      {data.map((img, index) => {
        return (
          <img
            className={
              slideIndex === index + 1 ? "img-slide img-animate" : "img-slide"
            }
            key={index}
            src={img.imgUrl}
            onClick={slideNext}
          />
        );
      })}
    </div>
  );
};

export default Slider;
