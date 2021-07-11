import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isSecondary) className.push("btn-outline-warning");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  className: propTypes.string,
  href: propTypes.string,
  target: propTypes.string,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  hasShadow: propTypes.bool,
  onClick: propTypes.func,
};

export default Button;
