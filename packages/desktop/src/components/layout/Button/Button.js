import React from "react";
import { Button } from "semantic-ui-react";
import "./style.scss";

const CustomButton = ({ children, inverted, containerClass }) => (
  <div className={containerClass}>
    <Button inverted={inverted}>{children}</Button>
  </div>
);

export default CustomButton;
