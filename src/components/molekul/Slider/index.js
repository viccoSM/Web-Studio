import React, { useEffect, useState } from "react";
import Dots from "../../atom/Dots";
import "./index.scss";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const autoPlay = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideIndex !== data.length - 1) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === data.length - 1) {
        setSlideIndex(0);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [slideIndex, autoPlay]);

  return (
    <div className="slider">
      <img className="img-slide img-animate" src={data[slideIndex].imgUrl} />

      <div className="dots-slide d-flex">
        {Array.from({ length: data.length }).map((item, index) => {
          return (
            <Dots
              className={
                slideIndex === index ? "ms-3 dots dots-active" : "ms-3 dots"
              }
              onClick={() => setSlideIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
