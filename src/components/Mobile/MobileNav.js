import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { Logout } from '../../actions/authAction';

const MobileNav = ({ user, Logout }) => {
  const { Name } = user;
  return (
    <div className='MobileNav'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          <Link to='/Dashboard'>
            <img src={logo} alt='Mobile logo' id='MobileNav-img' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title={`שלום ${user.Name}`} id='basic-nav-dropdown'>
              <NavDropdown.Item className='Nav-Setting'>
                הגדרות
              </NavDropdown.Item>
              <NavDropdown.Item href='/PersonalDetails'>
                פרטים אישיים
              </NavDropdown.Item>
              <NavDropdown.Item href='/changePass'>
                שינוי סיסמה
              </NavDropdown.Item>
              <NavDropdown.Item href='/ChangeEmail'>
                שינוי דואר אלקטרוני
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/' onClick={() => Logout()}>
                התנתקות
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Dashboard'>לוח בקרה</Nav.Link>
            <Nav.Link href='/nclients'>לקוח חדש</Nav.Link>
            <Nav.Link href='/healthp'>הצהרת בריאות</Nav.Link>
            <Nav.Link href='/AllClients'>לקוחות</Nav.Link>
            <Nav.Link href='/statistics'>סטטיסטיקת מתאמנים</Nav.Link>
            <Nav.Link href='/exeplan'>תוכניות אימונים</Nav.Link>
            <Nav.Link href='/updates'>עדכונים</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
MobileNav.propTypes = {
  user: PropTypes.object,
  Logout: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(
  mapStateToProps,
  { Logout }
)(MobileNav);
