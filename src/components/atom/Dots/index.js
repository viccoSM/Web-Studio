import React from "react";
import propTypes from "prop-types";
import "./index.scss";

const Dots = (props) => {
  const className = [props.className];

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  return <div className={`${className.join(" ")}`} onClick={onClick}></div>;
};

Dots.propTypes = {
  className: propTypes.string,
  onClick: propTypes.func,
};

export default Dots;
