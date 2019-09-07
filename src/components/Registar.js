import React, { Component } from "react";
import logo from "../logo.png";
import mainback from "../mainback.png";
import { faAddressCard as FasAddressCard} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock,faEnvelope,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

class Registar extends Component {
  render() {
    return (
      <div className="Registar">
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
              <FontAwesomeIcon className="Main-Icon" icon={FasAddressCard} />
              <header className="Main-Title">
                הרשמה
              </header>
              <form className="FormRegister">
              <FontAwesomeIcon className="Icon-Username" icon={faUserCircle} />
                <input
                  type="text"
                  name="user"
                  placeholder="שם משתמש"
                  required
                />
                <FontAwesomeIcon className="Icon-Register" icon={faUser} />
                <input
                  type="text"
                  name="lastname"
                  placeholder="שם משפחה"
                  required
                />
                <FontAwesomeIcon className="Icon-Register" icon={faUser} />
                <input
                  type="text"
                  name="firstname"
                  placeholder="שם פרטי"
                  required
                />
                <FontAwesomeIcon className="Icon-Register" icon={faEnvelope} />
                <input
                  type="email"
                  name="email"
                  placeholder="דואר אלקטרוני"
                  required
                />
                <div className="Main-Padding"></div>
                <div className="Main-Border"></div>
                <FontAwesomeIcon className="Icon-Register-Password" icon={faLock} />
                <input
                  type="password"
                  name="password"
                  placeholder="סיסמא"
                  required
                />
                <FontAwesomeIcon className="Icon-Register" icon={faLock} />
                <input
                  type="password"
                  name="re-password"
                  placeholder="אימות סיסמא"
                  required
                />
                <div className="Main-Padding"></div>
                <div className="Main-Border"></div>
                <input type="submit" name="register" value="הרשמה" />
                <div className="Main-Padding"></div>
                <div className="Main-Border"></div>
                <div className="Main-Label-Att">
                <label>כבר יש לך משתמש?</label>
                <NavLink to="/" className="Main-Return-Link" exact={true}>
                התחבר
                </NavLink>
                </div>
              </form>
            </div>
          </div>
        <div className="Footer-Pages">
            <div className="Main-Title-Footer">Final Project By Eden Elmalich</div>
          </div>
          </div>
      </div>
    );
  }
}

export default Registar;
