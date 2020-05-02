import React, { Component } from "react";
import SignUpModal from "./SignUpModal";

class SignUpButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal = (e) => {
    this.setState({
      show: true,
    });
  };
  render() {
    return (
      <>
        <button className="btn btn-lg btn-info" onClick={this.showModal}>
          SignUp
        </button>
        <SignUpModal show={this.state.show} onClick={this.showModal} />
      </>
    );
  }
}

export default SignUpButton;
