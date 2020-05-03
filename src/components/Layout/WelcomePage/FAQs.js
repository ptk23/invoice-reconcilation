import React, { Component } from "react";

class FAQs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="faqs" id={this.props.id}>
          <h1> FAQs</h1>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>
    );
  }
}

export default FAQs;
