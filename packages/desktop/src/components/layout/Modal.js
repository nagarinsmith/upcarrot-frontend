import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const modalStyles = {
  text: {
    color: "white"
  },
  body: {
    background: "#151523"
  },
  borderBottom: {
    borderBottom: "1px white solid"
  }
};

const ModalExampleDimmer = ({ isOpen, close, children, title }) => (
  <Modal
    dimmer="blurring"
    open={isOpen}
    onClose={close}
    style={{ ...modalStyles.text, ...modalStyles.body }}
  >
    <Modal.Header
      style={{
        ...modalStyles.text,
        ...modalStyles.body,
        ...modalStyles.borderBottom
      }}
    >
      {title}
    </Modal.Header>
    {children}
  </Modal>
);

export default ModalExampleDimmer;
