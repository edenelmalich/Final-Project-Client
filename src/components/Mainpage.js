import React, { Component } from "react";
import "../css/CssFont.css";
import logo from "../logo.png";
import mainback from "../mainback.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as FasUser } from "@fortawesome/free-regular-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Mainpage extends Component {
  render() {
    return (
      <div className="Mainpage">
        <img className="MainBack" src={mainback} alt="main" />
        <header>
          <img className="Mainlogo" src={logo} alt="Logo" />
        </header>
        <header className="MainTitle">תוכנה לניהול חדר כושר</header>
        <div className="Main-Wrap">
          <div className="Main-Box">
            <header className="MainHeader">
              <div className="Main-HeaderText">Maxfit Gym</div>
            </header>
            <div className="MainAtt">
              <FontAwesomeIcon className="Main-Icon" icon={FasUser} />
              <header className="Main-Title"> התחברות</header>
              <form className="FormLogin">
                <FontAwesomeIcon className="Icon-Login" icon={faUser} />
                <input
                  type="text"
                  name="username"
                  placeholder="שם משתמש"
                  required
                />
                <FontAwesomeIcon className="Icon-Login-Pass" icon={faLock} />
                <div className="Padding-Login"></div>
                <input
                  type="password"
                  name="Password"
                  placeholder="סיסמא"
                  required
                />
                <input type="submit" name="Password" value="התחברות" />
                <div className="Padding-Login"></div>
                <div className="Main-Border"></div>
                <div className="Label-Login-Att">
                  <NavLink to="/forgotPass" className="ForgetButton">
                    <div className="Main-Padding"></div>
                    שכחת את הסיסמה?
                  </NavLink>
                  <label>
                    זכור אותי?
                    <input type="checkbox" name="forget" value="Remember" />
                  </label>
                </div>
                <div className="Main-Padding"></div>
                <div className="Main-Border"></div>
                <div className="Main-Padding"></div>
                <div className="Label-Login-Att">
                  <label>אין לך משתמש?</label>
                  <NavLink to="/registarApp" className="RegistarButton">
                    הירשם כעת
                  </NavLink>
                </div>
                <div className="Main-Padding"></div>
              </form>
            </div>
          </div>
        </div>
        <div className="Footer-Pages">
          <div className="Main-Title-Footer">
            Final Project By Eden Elmalich
          </div>
        </div>
      </div>
    );
  }
}
export default Mainpage;
