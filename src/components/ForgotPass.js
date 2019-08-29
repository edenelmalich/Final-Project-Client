import React, { Component } from "react";
import { faUser, faLock,faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../logo.png";
import mainback from "../mainback.png";
import { NavLink } from 'react-router-dom';

class ForgotPass extends Component {
  render() {
    return (
      <div className="ForgotPass">
      <img className="MainBack" src={mainback} alt="main" />
        <header>
          <img className="Mainlogo" src={logo} alt="Logo" />
        </header>
        <div className="MainpageContainer">
        <header className="MainTitle">תוכנה לניהול חדר כושר</header>
          <div className="Mainobject">
            <header className="MainHeader">
              <div className="HeaderText">Maxfit Gym</div>
              </header>
          <div className="RegisterBox">
            <div className="LoginAtt">
              <FontAwesomeIcon className="IconLogin" icon={faUnlockAlt} />
              <header id="ForgetHeader" className="LoginHeader">
                איפוס סיסמא
              </header>
              <form className="FormForgot">
                <span className="IconInputBox">
                  <FontAwesomeIcon className="icon-Login" icon={faUser} />
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="שם משתמש"
                  required
                />
                <div className="IconInputBox">
                  <FontAwesomeIcon className="icon-Pass" icon={faUnlockAlt} />
                </div>
                <input
                  type="password"
                  name="Password"
                  placeholder="סיסמא"
                  required
                />
                <div className="IconInputBox">
                  <FontAwesomeIcon className="icon-Pass" icon={faLock} />
                </div>
                <input
                  type="password"
                  name="re-Password"
                  placeholder="אימות סיסמא"
                  required
                />
                <input className="PassButton" type="submit" name="Password" value="אפס סיסמא" />
                <NavLink to="/" className="ReturnLogin" id="ReturnLog" exact={true}>התחברות</NavLink>
              </form>
            </div>
          </div>
        </div>
        <div className="FooterMain">
            <div className="Main-Title-Footer">Final Project By Eden Elmalich</div>
          </div>
      </div>
      </div>
    );
  }
}

export default ForgotPass;
