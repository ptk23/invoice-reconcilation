import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="contactUs" id={this.props.id}>
          <div class="topnav">
            <Link
              activeClass="active"
              to={this.props.section3}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p>FAQs</p>
            </Link>
            <Link
              activeClass="active"
              to={this.props.section2}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p>How it Works?</p>
            </Link>
            <Link
              activeClass="active"
              to={this.props.section1}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p>Home</p>
            </Link>
          </div>
          <footer>
            <p>
              Contact information:{" "}
              <a href="mailto:someone@example.com">someone@example.com</a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
