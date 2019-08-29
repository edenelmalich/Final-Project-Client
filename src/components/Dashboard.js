import React, { Component } from "react";
import Navbar from "./Navbar";
import "../css/CssFont.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faUserClock,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Navbar />
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                <h2>סקירה כללית</h2>
                <div className="MainPad">
                  <div className="BoxsAtt">
                      <div className="BoxInfo" id="ClientDesign">
                        <div className="icon">
                          <FontAwesomeIcon icon={faUser} size="3x" />
                        </div>
                        <div className="text">
                          <span>לקוחות</span>
                        </div>
                      </div>
                    <div className="BoxInfo" id="NclientDesign">
                      <div className="icon">
                        <FontAwesomeIcon icon={faUserPlus} size="3x" />
                      </div>
                      <div className="text">
                        <span>לקוחות חדשים</span>
                      </div>
                    </div>
                    <div className="BoxInfo" id="SubscriptionDesign">
                      <div className="icon">
                        <FontAwesomeIcon icon={faUserClock} size="3x" />
                      </div>
                      <div className="text">
                        <span>חידוש מנויים</span>
                      </div>
                    </div>
                    <div className="BoxInfo" id="StatisticsDesign">
                      <div className="icon">
                        <FontAwesomeIcon icon={faChartBar} size="3x" />
                      </div>
                      <div className="text">
                        <span>סטטיסטיקת מנויים</span>
                      </div>
                    </div>
                  </div>
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
export default Dashboard;
