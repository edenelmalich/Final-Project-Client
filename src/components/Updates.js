import React, { Component } from "react";
import "../css/CssFont.css";
import Navbar from "./Navbar";

export class Updates extends Component {
  render() {
    return (
      <div className="updates">
        <Navbar />
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                <h2>עדכונים</h2>
                <div className="MainPad">
                  <div className="UpdateBox">
                    <div className="HeaderUpdateBox">
                      <h3>עדכון חדש</h3>
                    </div>
                    <form action="#action" className="formUpdate">
                    <div className="FormPadding">
                      <label>שם משפחה:</label>
                      <input type="text" name="firstname" required />
                      <span className="textPadding">
                      <label>שם פרטי:</label>
                      </span>
                      <input type="text" name="lastname" required />
                      <br/>
                    </div>
                    <div className="FormPadding">
                      <div className="UpdateText">הכנס עדכון חדש</div>
                      <div className="PaddingText"></div>
                    <textarea name="update"></textarea>
                    </div>
                    <div className="FormPadding">
                      <input type="submit" name="SendUpdate" value="הוסף עדכון חדש"></input>
                    </div>
                  </form>
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

export default Updates;
