import React from 'react';
import logo from '../../img/logo.png';
import './NavbarCss.css';
import { NavLink, Link } from 'react-router-dom';
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
// Redux
import { connect } from 'react-redux';
import { SetNotification } from './../../actions/notificationAction';
import { SetAccount } from './../../actions/accountAction';
import { SetList } from '../../actions/listAction';
import { Disconnect } from '../../actions/DisconnectAction';

const Navbar = props => {
  // This Function Check if The Notification Box Are Open And Set The State Again
  const {
    notifications,
    NotificationsSelected,
    Account,
    AccountSelected,
    ListBoxSelected,
    List
  } = props;
  const operationNoti = () => {
    notifications(NotificationsSelected);
    //if The Account Box Are Open We Want To set The State Again That The Windows Will Close

    if (AccountSelected === true) {
      Account(AccountSelected);
    }
    if (ListBoxSelected === true) {
      List(ListBoxSelected);
    }
  };
  // The Same Function Just Here We Will Check The Account State
  const operationAcc = () => {
    Account(AccountSelected);
    // The Same if The Notification Box Are Open We Want To close it
    if (NotificationsSelected === true) {
      notifications(NotificationsSelected);
    }
    if (ListBoxSelected === true) {
      List(ListBoxSelected);
    }
  };
  return (
    <div className='Navbar'>
      <div className='Pages-Wrapper'>
        <aside className='sidebar'>
          <div className='logo'>
            <Link to='/dashboard'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <div className='sidebar__AttText'>
            <ul>
              <li>
                <NavLink to='/Dashboard'>
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
            <button onClick={() => operationNoti()} className='Notifications'>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <div className='Accname'>Eden Elmalich</div>
            <button onClick={() => operationAcc()} className='icon-acc'>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
          {NotificationsSelected ? (
            <NotiBox operationNoti={operationNoti} />
          ) : null}
          {AccountSelected ? <Accbox operationAcc={operationAcc} /> : null}
        </header>
        <header className='header-logo' />
      </div>
    </div>
  );
};
//This Box will show the settings
const Accbox = props => (
  <div className='AccBox'>
    <div className='Settings-Title'>הגדרות</div>
    <Link
      to='/PersonalDetails'
      onClick={() => props.operationAcc()}
      className='Settings-item'
    >
      פרטים אישיים
    </Link>
    <Link
      to='/ChangePass'
      onClick={() => props.operationAcc()}
      className='Settings-item'
    >
      שינוי סיסמא
    </Link>
    <Link
      to='/ChangeEmail'
      onClick={() => props.operationAcc()}
      className='Settings-item'
    >
      שינוי דואר אלקטרוני
    </Link>
    <Link to='/' onClick={() => props.Disconnect()} className='Settings-item'>
      התנתקות
    </Link>
  </div>
);
//This Box will show the notifications
const NotiBox = props => (
  <div className='NotiBox'>
    <div className='Notification-Title'>יש לך 2 התראות חדשות</div>
    <div className='Notification-item'>התקבלה הצהרת בריאות חדשה</div>
    <div className='Notification-item'>נרשם לקוח חדש</div>
    <Link
      to='/Notifications'
      onClick={() => props.operationNoti()}
      className='Notification-Footer'
    >
      לכל ההתראות
    </Link>
  </div>
);
const mapStateToProps = state => {
  return {
    NotificationsSelected: state.notiReducer.NotificationsSelected,
    AccountSelected: state.accountReducer.AccountSelected,
    ListBoxSelected: state.listReducer.ListBoxSelected
  };
};
const mapDispatchToProps = dispatch => {
  return {
    notifications: boolean => {
      dispatch(SetNotification(boolean));
    },
    Account: boolean => {
      dispatch(SetAccount(boolean));
    },
    List: boolean => {
      dispatch(SetList(boolean));
    },
    disconnect: () => {
      dispatch(Disconnect());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
