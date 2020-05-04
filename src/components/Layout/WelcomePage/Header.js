import React, { useState, Component } from "react";
import "../../css/WelcomePage.css";
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const bgStyle = {
      backgroundImage:
        "url(" + require("../../css/images/WelcomeImage.jpg") + ")",
      minHeight: "200px",
      /* Center and scale the image nicely */
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      /* Needed to position the navbar */
      position: "relative",
      maxWidth: "100%",
    };

    return (
      <div>
        <div class="bg-img" style={bgStyle} id={this.props.section1}>
          <div className="fixed-header">
            <div class="container-fluid">
              <div className="row">
                <div class="col-sm-5">
                  <div class="col-sm-5">
                    <div class="topnav-left">
                      <p>Title</p>
                    </div>
                  </div>
                </div>
                <div class="topnav">
                  <Link
                    activeClass="active"
                    to={this.props.section4}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p>Contact Us</p>
                  </Link>
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
              </div>
            </div>
          </div>
          <div className="welcomeText">
            <p> Invoice Reconciliation Tool </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
