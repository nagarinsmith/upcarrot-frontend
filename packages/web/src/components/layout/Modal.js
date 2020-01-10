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

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show(true)}>Default</Button>
        <Button onClick={this.show("inverted")}>Inverted</Button>
        <Button onClick={this.show("blurring")}>Blurring</Button>

        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          style={{ ...modalStyles.text, ...modalStyles.body }}
        >
          <Modal.Header
            style={{
              ...modalStyles.text,
              ...modalStyles.body,
              ...modalStyles.borderBottom
            }}
          >
            Add expense
          </Modal.Header>
          <Modal.Content
            style={{
              ...modalStyles.text,
              ...modalStyles.body,
              ...modalStyles.borderBottom
            }}
          >
            <Modal.Description>{this.props.children}</Modal.Description>
          </Modal.Content>
          <Modal.Actions style={{ ...modalStyles.text, ...modalStyles.body }}>
            <Button color="black" onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleDimmer;
