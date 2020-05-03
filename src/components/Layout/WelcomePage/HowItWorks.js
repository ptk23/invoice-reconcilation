import React, { Component } from "react";

class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="howItWorks" id={this.props.id}>
          <div>
            <h1> Watch how it works! </h1>
            <p>
              Here is a short video on how you can use the Invoice
              Reconciliation Process. Please watch to make the best use of this
              feature.
            </p>
          </div>
          <div className="iframe-container">
            <iframe
              src="https://www.youtube.com/embed/TcMBFSGVi1c"
              frameborder="10"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>
    );
  }
}

export default HowItWorks;
