import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class SignUpModal extends Component {
  constructor(props) {
    super(props);
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }
  render() {
    const [modal, toggle] = [this.props.show, this.props.show];
    return (
      <div>
        <Modal isOpen={modal}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>Need to Build.</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default SignUpModal;
