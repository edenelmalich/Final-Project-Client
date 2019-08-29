import React, { Component } from "react";
import Navbar from "./Navbar";

class HealthP extends Component {
  render() {
    return (
      <div className="Healthp">
        <Navbar />
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                  <div className="FormN">
                    <header className="header-Form">
                      <h3>הצהרות בריאות</h3>
                    </header>
                </div>
              </div>
            </div>
          </div>
          <div className="FooterText">
            <div className="FooterTitle">Final Project By Eden Elmalich </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HealthP;
