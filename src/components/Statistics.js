import React, { Component } from "react";
import Navbar from "./Navbar";
import "../css/CssFont.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeight,
  faDumbbell,
  faChartBar,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

class Statistics extends Component {
  render() {
    return (
      <div className="Statistics">
        <Navbar />
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                <h2>סטטיסטיקת מתאמנים</h2>
                <div className="Header-Att"></div>
                <div className="MainPad">
                <div className="StatisticInfo-Margin">
                    <div className="StatisticInfo">
                    <div className="HeaderStat">
                        <h4 id="FontStatistic"> סטטיסטיקת משקל </h4>
                        <span className="Iconstat">
                          <FontAwesomeIcon icon={faWeight} />
                        </span>
                      </div>
                    </div>
                    </div>
                  <div className="StatisticInfo-Att">
                    <div className="StatisticInfo">
                    <div className="HeaderStat" id="HeaderHand">
                        <h4 id="FontStatistic"> סטטיסטיקת היקף יד קדמית</h4>
                        <span className="Iconstat">
                          <FontAwesomeIcon icon={faDumbbell} />
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="FooterText">
          <div className="FooterTitle">
            Final Project By Eden Elmalich
          </div>
        </div>
      </div>
    );
  }
}
export default Statistics;
