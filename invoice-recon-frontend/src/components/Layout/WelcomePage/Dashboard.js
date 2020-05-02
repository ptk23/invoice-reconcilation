import React, { Component } from "react";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import FAQs from "./FAQs";
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    const section1Id = "section1";
    const section2Id = "section2";
    const section3Id = "section3";
    const section4Id = "section4";
    return (
      <div>
        <Header
          section1={section1Id}
          section2={section2Id}
          section3={section3Id}
          section4={section4Id}
        />
        {
          //Need to add home section later.
        }
        <HowItWorks id={section2Id} />
        <FAQs id={section3Id} />
        <Footer
          id={section4Id}
          section1={section1Id}
          section2={section2Id}
          section3={section3Id}
        />
      </div>
    );
  }
}
export default Dashboard;
