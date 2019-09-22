import React, { Fragment, useState } from 'react';
import { faUser, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ForgotPassCss.css';
import logo from '../../img/logo.png';
import mainback from '../../img/mainback.png';
import { NavLink } from 'react-router-dom';

const ForgotPass = () => {
  const [Data, SetData] = useState({
    Email: '',
    Password: '',
    RePassword: ''
  });
  const { Email, Password, RePassword } = Data;
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (Password !== RePassword) {
      console.log('Passwords not match');
    } else {
      console.log(Data);
    }
  };

  return (
    <Fragment>
      <img className='MainBack' src={mainback} alt='main' />
      <header>
        <img className='Mainlogo' src={logo} alt='Logo' />
      </header>
      <header className='MainTitle'>תוכנה לניהול חדר כושר</header>
      <div className='Main-Wrap'>
        <div className='Main-Box'>
          <header className='MainHeader'>
            <div className='Main-HeaderText'>Maxfit Gym</div>
          </header>
          <div className='MainAtt'>
            <FontAwesomeIcon className='Main-Icon' icon={faUnlockAlt} />
            <header className='Main-Title'>איפוס סיסמא</header>
            <form className='FormForgot' onSubmit={e => onSubmit(e)}>
              <FontAwesomeIcon className='Icon-Forgot' icon={faUser} />
              <input
                type='text'
                name='Email'
                value={Email}
                onChange={e => onChange(e)}
                placeholder='דואר אלקטרוני'
                required
              />
              <FontAwesomeIcon
                className='Icon-Forgot-Pass'
                icon={faUnlockAlt}
              />
              <input
                type='password'
                name='Password'
                value={Password}
                onChange={e => onChange(e)}
                placeholder='סיסמא'
                required
              />
              <FontAwesomeIcon className='Icon-Forgot-Pass' icon={faLock} />
              <input
                type='password'
                name='RePassword'
                value={RePassword}
                onChange={e => onChange(e)}
                placeholder='אימות סיסמא'
                required
              />
              <div className='PaddingForget'></div>
              <div className='Main-Border'></div>
              <input
                className='PassButton'
                type='submit'
                name='Password'
                value='אפס סיסמא'
              />
              <div className='Main-Padding'></div>
              <div className='Main-Border'></div>
              <div className='Main-Label-Att'>
                <label>כבר יש לך משתמש?</label>
                <NavLink to='/' className='Main-Return-Link' exact={true}>
                  התחבר
                </NavLink>
              </div>
            </form>
          </div>
        </div>
        <div className='Footer-Pages'>
          <div className='Main-Title-Footer'>
            Final Project By Eden Elmalich
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ForgotPass;
