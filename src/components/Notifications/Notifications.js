import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import '../Notifications/NotiCss.css';
const Notifications = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='Page-Container'>
        <div className='Pages-Content'>
          <div className='Att-PagesContent'>
            <div className='PagesContainer'>
              <h2>התראות</h2>
              <div className='Noti-Padding'></div>
              <div className='Noti-Main'>
                <div className='Noti-Window'>
                  <div className='Noti-Header '>התראות</div>
                  <div className='Main-Padding'></div>
                  <div className='Main-Border'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='FooterText'>
            <div className='FooterTitle'>Final Project By Eden Elmalich </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Notifications;
