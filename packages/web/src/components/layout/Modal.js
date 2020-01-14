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

const ModalExampleDimmer = ({ isOpen, close, children }) => (
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
       
    </Modal.Header>
    <Modal.Content
      style={{
        ...modalStyles.text,
        ...modalStyles.body,
        ...modalStyles.borderBottom
      }}
    >
      <Modal.Description>{children}</Modal.Description>
    </Modal.Content>
    <Modal.Actions style={{ ...modalStyles.text, ...modalStyles.body }}>
      <Button className="cancelNumber" onClick={close}>
        Cancel
      </Button>
      <Button
        positive
        className="saveButton"
        icon="checkmark"
        labelPosition="right"
        content="Save"
        onClick={close}
      />
    </Modal.Actions>
  </Modal>
);

export default ModalExampleDimmer;
