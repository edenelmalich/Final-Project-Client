import React, { Component } from "react";
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';

class ExePlan extends Component {
  // Function That For Checking The State of The Days
  // And The Function Set the state again

  render() {
    return (
      <div className="ExePlan">
        <Navbar />
        {/* General Attributes For ExePlan Page + Header*/}
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                <h2>בניית תוכנית אימונים</h2>
                {/* The Attributes of The Main Box */}
                {/* All Objects Are inside it */}
                  <div className="ExeMain">
                    <form className="ExeForm">
                      <input type="text" placeholder="שם מתאמן" />
                      <select name="Days">
                        <option>מספר ימי אימון</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                      </select>
                    </form>
                    {/*in This Code i Will Create The Days*/}
                    <div className="ExeDays">
                      <NavLink to="/BuildPlan"
                        className="ExeBoxs"
                        id="SundayDesign"
                      >
                      <div className="DaysText">יום ראשון</div>
                      </NavLink>
                      <NavLink to="/BuildPlan"
                        className="ExeBoxs"
                        id="MondayDesign"
                      >
                        <div className="DaysText">יום שני</div>
                      </NavLink>
                      <NavLink to="/BuildPlan"
                        className="ExeBoxs"
                        id="TuesdayDesign"
                      >
                        <div className="DaysText">יום שלישי</div>
                      </NavLink>
                      <NavLink to="/BuildPlan"
                        className="ExeBoxs"
                        id="WednesdayDesign"
                      >
                        <div className="DaysText">יום רביעי</div>
                      </NavLink>
                      <NavLink to="/BuildPlan"
                        className="ExeBoxs"
                        id="ThursdayDesign"
                      >
                        <div className="DaysText">יום חמישי</div>
                      </NavLink>
                      <NavLink to="/BuildPlan"
                        className="ExeBoxs"
                        id="FridayDesign"
                      >
                        <div className="DaysText">יום שישי</div>
                      </NavLink>
                      <NavLink to="/BuildPlan"
                        className="ExeBoxs"
                        id="SaturdayDesign"
                      >
                        <div className="DaysText">יום שבת</div>
                      </NavLink>
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
export default ExePlan;
