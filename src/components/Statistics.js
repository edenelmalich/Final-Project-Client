import React, { Component } from 'react';
import Navbar from './Navbar';
import '../css/CssFont.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeight, faDumbbell } from '@fortawesome/free-solid-svg-icons';

class Statistics extends Component {
  render() {
    return (
      <div className='Statistics'>
        <Navbar />
        <div className='Page-Container'>
          <div className='Pages-Content'>
            <div className='Att-PagesContent'>
              <div className='PagesContainer'>
                <h2>סטטיסטיקת מתאמנים</h2>
                <div className='Flex-Statistic'>
                  <div className='StatisticInfo'>
                    <div className='HeaderStat'>
                      <h4 className='Statistic-Header-Att'> סטטיסטיקת משקל </h4>
                      <div className='Iconstat'>
                        <FontAwesomeIcon icon={faWeight} />
                      </div>
                    </div>
                  </div>
                  <div className='StatisticInfo'>
                    <div className='HeaderStat'>
                      <h4 className='Statistic-Header-Att'>
                        {' '}
                        סטטיסטיקת היקף יד קדמית
                      </h4>
                      <div className='Iconstat'>
                        <FontAwesomeIcon icon={faDumbbell} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='FooterText'>
            <div className='FooterTitle'>Final Project By Eden Elmalich</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Statistics;
