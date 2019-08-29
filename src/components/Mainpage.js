import React, { Component } from "react";
import "../css/CssFont.css";
import logo from "../logo.png";
import mainback from "../mainback.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser as FasUser} from "@fortawesome/free-regular-svg-icons";
import { faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

class Mainpage extends Component {
  render() {
    return (
      <div className="Mainpage">
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
              <div className="Loginbox">
                <div className="LoginAtt">
                  <FontAwesomeIcon className="IconLogin" icon={FasUser} />
                  <header className="LoginHeader"> התחברות</header>
                  <form className="FormLogin">
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
                      <FontAwesomeIcon className="icon-Pass" icon={faLock} />
                    </div>
                    <input
                      type="password"
                      name="Password"
                      placeholder="סיסמא"
                      required
                    />
                    <input type="submit" name="Password" value="התחברות" />
                    <div className="FormFooter">
                      <span className="Footer-Text">
                        <NavLink to='/forgotPass'
                          className="ForgetButton"
                        >
                          שכחת את הסיסמה?
                        </NavLink>
                      </span>
                      <span className="FooterForgot">זכור אותי</span>
                      <input type="checkbox" name="forget" value="Remember" />
                      <hr />
                      <div className="RegistarText">
                        אין לך משתמש?
                        <NavLink to="/registarApp"
                          className="RegistarButton"
                        >
                          הירשם כעת
                        </NavLink>
                      </div>
                    </div>
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
export default Mainpage;
