import React, { Component } from "react";
import "../css/CssFont.css";
import Navbar from "./Navbar";

export class Updates extends Component {
  render() {
    return (
      <div className="updates">
        <Navbar />
        <div className="Page-Container">
          <div className="Pages-Content">
            <div className="Att-PagesContent">
              <div className="PagesContainer">
                <div className="FormClient">
                  <header className="Header-Client">
                    <h3>עדכונים</h3>
                  </header>
                    <form action="#action" className="Form-Update">
                    <div className="Main-Padding"></div>
                      <input type="text" name="firstname" placeholder="שם פרטי" required />
                      <input type="text" name="lastname" placeholder="שם משפחה" required />
                    <div className="Main-Padding"></div>
                      <div className="Main-Border"></div>
                      <label>הכנס עדכון חדש</label>
                      <div className="Main-Padding"></div>
                    <textarea name="update"></textarea>
                    <div className="Main-Padding"></div>
                    <div className="Main-Border"></div>
                      <input type="submit" name="SendUpdate" value="הוסף עדכון חדש"/>
                  </form>
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
