import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './SettingsCss.css';
// Redux
import { connect } from 'react-redux';
import { Disconnect } from '../../actions/DisconnectAction';

const PersonalDetails = ({ Disconnect }) => {
  return (
    <Fragment>
      <Navbar />
      <div className='Page-Container'>
        <div className='Pages-Content'>
          <div className='Att-PagesContent'>
            <div className='PagesContainer'>
              <h2>הגדרות</h2>
              <div className='Noti-Padding'></div>
              <div className='Main-Settings'>
                <div className='Settings-Window'>
                  <div className='Setting-Sidebar'>
                    <div className='Settings-logo'>
                      <div className='Logo-Text'>הגדרות</div>
                    </div>
                    <NavLink to='/PersonalDetails' className='Settings-nav'>
                      פרטים אישיים
                    </NavLink>

                    <NavLink to='/ChangePass' className='Settings-nav'>
                      שינוי סיסמא
                    </NavLink>
                    <NavLink to='/ChangeEmail' className='Settings-nav'>
                      שינוי דואר אלקטרוני
                    </NavLink>
                    <Link
                      to='/'
                      onClick={() => Disconnect()}
                      className='Settings-nav'
                    >
                      התנתקות
                    </Link>
                  </div>
                  <div className='Settings-Header'></div>
                </div>
                <div className='Settings-Container'>
                  <div className='Settings-Content'>
                    <div className='Settings-Page-Header'>
                      <div className=''>פרטים אישיים</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='FooterContainer'>
            <div className='FooterText'>
              <div className='FooterTitle'>Final Project By Eden Elmalich </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    disconnect: () => {
      dispatch(Disconnect());
    }
  };
};
export default connect(mapDispatchToProps)(PersonalDetails);
