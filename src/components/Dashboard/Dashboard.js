import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../css/CssFont.css';
import './DashboardCSS.css';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faUserPlus,
  faUserClock,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
// Redux
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    if (!this.props.isAuthLogin) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <Navbar />
        <div className='Page-Container'>
          <div className='Pages-Content'>
            <div className='Att-PagesContent'>
              <div className='PagesContainer'>
                <h2>סקירה כללית</h2>
                <div className='DashBoard-Margin'>
                  <div className='Dash-Box-Att'>
                    <div className='BoxInfo' id='ClientDesign'>
                      <Link to='/customers'>
                        <div className='DashBoard-Icon'>
                          <FontAwesomeIcon icon={faUser} size='3x' />
                        </div>
                        <div className='DashBoard-Text'>לקוחות</div>
                      </Link>
                    </div>
                    <div className='BoxInfo' id='NclientDesign'>
                      <a href='#Clients'>
                        <div className='DashBoard-Icon'>
                          <FontAwesomeIcon icon={faUserPlus} size='3x' />
                        </div>
                      </a>
                      <div className='DashBoard-Text'>
                        <span>לקוחות חדשים</span>
                      </div>
                    </div>
                    <div className='BoxInfo' id='SubscriptionDesign'>
                      <div className='DashBoard-Icon'>
                        <FontAwesomeIcon icon={faUserClock} size='3x' />
                      </div>
                      <div className='DashBoard-Text'>
                        <span>חידוש מנויים</span>
                      </div>
                    </div>
                    <div className='BoxInfo' id='StatisticsDesign'>
                      <div className='DashBoard-Icon'>
                        <FontAwesomeIcon icon={faChartBar} size='3x' />
                      </div>
                      <div className='DashBoard-Text'>
                        <span>סטטיסטיקת מנויים</span>
                      </div>
                    </div>
                  </div>
                  <div className='Dash-Box-Att'>
                    <div className='BoxStat'>
                      <div className='BoxTitle'>סטטיסטיקת מנויים</div>
                    </div>
                    <div className='BoxStat'>
                      <div className='BoxTitle'>סטטיסטיקת חידוש מנויים</div>
                    </div>
                  </div>
                  <div className='TitleClient'>לקוחות חדשים</div>
                  <div className='Dash-Box-Att'>
                    <div className='BoxNewClients' id='Clients'>
                      <div className='ClientTitle'></div>
                    </div>
                    <div className='FooterText'>
                      <div className='FooterTitle'>
                        Final Project By Eden Elmalich
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  isAuthLogin: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthLogin: state.authLoginReducer.isAuthLogin
});
export default connect(mapStateToProps)(Dashboard);
