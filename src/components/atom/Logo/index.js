import React from "react";
import Button from "../Button";
import Logo from "../../../assets/images/PXst.svg";

const index = (props) => {
  return (
    <Button type="link" href={props.href}>
      <img src={Logo} alt="" />
    </Button>
  );
};

export default index;
