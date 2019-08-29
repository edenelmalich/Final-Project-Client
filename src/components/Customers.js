import React, { Component } from "react";
import Navbar from "./Navbar";

class Customers extends Component {
  render() {
    return (
      <div className="Customers">
        <Navbar />
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                <div className="FormN">
                  <header className="header-Form">
                    <h3>לקוחות</h3>
                  </header>
              </div>
            </div>
          </div>
        </div>
        <div className="FooterText">
            <div className="FooterTitle">Final Project By Eden Elmalich</div>
          </div>
      </div>
      </div>
    );
  }
}
export default Customers;
