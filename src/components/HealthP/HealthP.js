import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class HealthP extends Component {
  render() {
    return (
      <div className='Healthp'>
        <Navbar />
        <div className='Page-Container'>
          <div className='Pages-Content'>
            <div className='Att-PagesContent'>
              <div className='PagesContainer'>
                <div className='Flex-Pages'>
                  <div className='FormData'>
                    <header className='header-Form'>
                      <h3>הצהרות בריאות</h3>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='FooterText'>
            <div className='FooterTitle'>Final Project By Eden Elmalich </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HealthP;
