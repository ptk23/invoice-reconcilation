import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <a href="InvoiceRecon.html" className="btn btn-lg btn-info">
                Initiate Reconciliation Process
              </a>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
