import React, { Fragment, useState } from 'react';
import logo from '../../img/logo.png';
import mainback from '../../img/mainback.png';
import './RegisterCss.css';
import { faAddressCard as FasAddressCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Registar = () => {
  const [Data, SetData] = useState({
    LastName: '',
    FirstName: '',
    Email: '',
    Password: '',
    RePassword: ''
  });

  const { LastName, FirstName, Email, Password, RePassword } = Data;
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (Password !== RePassword) {
      console.log('The Passwords not match');
    } else {
      console.log('Registration Succeeded');
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
            <FontAwesomeIcon className='Main-Icon' icon={FasAddressCard} />
            <header className='Main-Title'>הרשמה</header>
            <form className='FormRegister' onSubmit={e => onSubmit(e)}>
              <FontAwesomeIcon className='Icon-Username' icon={faUser} />
              <input
                type='text'
                name='LastName'
                value={LastName}
                onChange={e => onChange(e)}
                placeholder='שם משפחה'
                required
              />
              <FontAwesomeIcon className='Icon-Register' icon={faUser} />
              <input
                type='text'
                name='FirstName'
                value={FirstName}
                onChange={e => onChange(e)}
                placeholder='שם פרטי'
                required
              />
              <FontAwesomeIcon className='Icon-Register' icon={faEnvelope} />
              <input
                type='email'
                name='Email'
                value={Email}
                onChange={e => onChange(e)}
                placeholder='דואר אלקטרוני'
                required
              />
              <div className='Main-Padding'></div>
              <div className='Main-Border'></div>
              <FontAwesomeIcon
                className='Icon-Register-Password'
                icon={faLock}
              />
              <input
                type='password'
                name='Password'
                value={Password}
                onChange={e => onChange(e)}
                placeholder='סיסמא'
                required
              />
              <FontAwesomeIcon className='Icon-Register' icon={faLock} />
              <input
                type='password'
                name='RePassword'
                value={RePassword}
                onChange={e => onChange(e)}
                placeholder='אימות סיסמא'
                required
              />
              <div className='Main-Padding'></div>
              <div className='Main-Border'></div>
              <input type='submit' name='register' value='הרשמה' />
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

export default Registar;
