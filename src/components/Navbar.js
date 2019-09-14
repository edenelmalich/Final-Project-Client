import React, { Component } from 'react';
import logo from '../logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faBell,
  faTachometerAlt,
  faUsers,
  faChartBar,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import {
  faFileAlt,
  faAddressCard,
  faEdit
} from '@fortawesome/free-regular-svg-icons';
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
    if (this.state.Account === true) {
      this.setState({
        Account: false
      });
    }
  }
  // The Same Function Just Here We Will Check The Account State
  operationAcc() {
    this.setState({
      Account: !this.state.Account
    });
    // The Same if The Notification Box Are Open We Want To close it
    if (this.state.Notification === true) {
      this.setState({
        Notification: false
      });
    }
  }
  render() {
    const { Notification, Account } = this.state;
    return (
      <div className='Navbar'>
        <div className='Pages-Wrapper'>
          <aside className='sidebar'>
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='sidebar__AttText'>
              <ul>
                <li>
                  <NavLink to='/dashboard'>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span className='IconPadding'>לוח בקרה</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/nclients'>
                    <FontAwesomeIcon icon={faAddressCard} />
                    <span className='IconPadding'>לקוח חדש</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/healthp'>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <span className='IconPadding'>הצהרת בריאות</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/customers'>
                    <FontAwesomeIcon icon={faUsers} />
                    <span className='IconPadding'>לקוחות</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/statistics'>
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className='IconPadding'>סטטיסטיקת מתאמנים</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/exeplan'>
                    <FontAwesomeIcon icon={faTasks} />
                    <span className='IconPadding'>תוכניות אימונים</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='updates'>
                    <FontAwesomeIcon icon={faEdit} />
                    <span className='IconPadding'>עדכונים</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>
          <header className='header-desktop'>
            <div className='Object-Att'>
              <button
                onClick={() => this.operationNoti()}
                className='Notifications'
              >
                <FontAwesomeIcon icon={faBell} />
              </button>
              <div className='Accname'>Eden Elmalich</div>
              <button onClick={() => this.operationAcc()} className='icon-acc'>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
            {Notification ? (
              <div className='NotiBox'>
                <div className='Notification-Title'>יש לך 2 התראות חדשות</div>
                <div className='Notification-item'>
                  התקבלה הצהרת בריאות חדשה
                </div>
                <div className='Notification-item'>נרשם לקוח חדש</div>
              </div>
            ) : null}
            {Account ? <Accbox /> : null}
          </header>
          <header className='header-logo' />
        </div>
      </div>
    );
  }
}
//This is The Box For The Account
const Accbox = () => <div className='AccBox' />;
export default Navbar;
