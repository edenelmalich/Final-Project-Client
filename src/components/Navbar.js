import React, { Component } from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faTachometerAlt,
  faUsers,
  faChartBar,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt, faAddressCard } from "@fortawesome/free-regular-svg-icons";
class Navbar extends Component {
  state = {
    Notification: false,
    Account: false
  };
  // This Function Check if The Notification Box Are Open And Set The State Again
  operationNoti() {
    this.setState({
      Notification: !this.state.Notification
    });
  //if The Account Box Are Open We Want To set The State Again That The Windows Will Close
      if(this.state.Account === true){
        this.setState({
          Account:false
        });
      }
  }
  // The Same Function Just Here We Will Check The Account State 
  operationAcc() {
    this.setState({
      Account: !this.state.Account 
    });
    // The Same if The Notification Box Are Open We Want To close it
    if(this.state.Notification === true){
      this.setState({
        Notification:false
      })
    }
    };
  render() {
    return (
      <div className="Navbar">
        {/* The Main Attributes of The NavBar its Work With all The Pages */}
        <header className="header-desktop">
          <div className="MainHeaderObject">
            <span className="Accname">Eden Elmalich</span>
            <button onClick={() => this.operationAcc()} className="icon-acc">
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <button
              onClick={() => this.operationNoti()}
              className="Notifications"
            >
              <FontAwesomeIcon icon={faBell} />
            </button>
          </div>
          {/* Here We Will Check The State All The Time if its True The Box Will close */}
          {/* And if True The Box Will Open */}
          {
            this.state.Notification ?<Notibox />
            : null
            }
          {
            this.state.Account?(<Accbox />)
          : null
          }
        </header>
        {/* This Code its For All The NavBar The Pages Name With The Logo*/}
        <header className="header-logo" />
        <nav>
          <aside className="sidebar">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="sidebar__AttText">
              <ul>
                <li>
                  <NavLink to="/dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    &nbsp; לוח בקרה
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/nclients">
                    <FontAwesomeIcon icon={faAddressCard} />
                    &nbsp; לקוח חדש
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/healthp">
                    <FontAwesomeIcon icon={faFileAlt} />
                    &nbsp; הצהרות בריאות
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/customers">
                    <FontAwesomeIcon icon={faUsers} />
                    &nbsp; לקוחות
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/statistics">
                    <FontAwesomeIcon icon={faChartBar} />
                    &nbsp; סטטיסטיקת מתאמנים
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exeplan">
                    <FontAwesomeIcon icon={faTasks} />
                    &nbsp; תוכניות אימונים
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>
        </nav>
      </div>
    );
  }
}
// This is The Box For The Notification 
const Notibox = () => (
  <div className="NotiBox">
    <div className="Notification-Title">יש לך 2 התראות חדשות</div>
    <div className="Notification-item">התקבלה הצהרת בריאות חדשה</div>
    <div className="Notification-item">נרשם לקוח חדש</div>
  </div>
)
//This is The Box For The Account
const Accbox = () => <div className="AccBox" />;
export default Navbar;
