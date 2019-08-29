import React, { Component } from "react";
import logo from "../logo.png";
import mainback from "../mainback.png";
import { faAddressCard as FasAddressCard} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

class Registar extends Component {
  render() {
    return (
      <div className="Registar">
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
              <FontAwesomeIcon className="IconLogin" icon={FasAddressCard} />
              <header id="RegisterHeader" className="LoginHeader">
                הרשמה
              </header>
              <form className="FormRegister">
                <input
                  type="text"
                  name="user"
                  placeholder="שם משתמש"
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="שם משפחה"
                  required
                />
                <input
                  type="text"
                  name="firstname"
                  placeholder="שם פרטי"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="דואר אלקטרוני"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="סיסמא"
                  required
                />
                <input
                  type="password"
                  name="re-password"
                  placeholder="אימות סיסמא"
                  required
                />
                <input type="submit" name="register" value="הרשמה" />
                <NavLink to="/" className="ReturnLogin" exact={true}>התחברות</NavLink>
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

export default Registar;
