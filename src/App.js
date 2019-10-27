import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import Customers from './components/Customers/Customers';
import HealthP from './components/HealthP/HealthP';
import Nclients from './components/NewClients/NewClients';
import ExePlan from './components/ExePlan/ExePlan';
import Mainpage from './components/Mainpage/Mainpage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/CssFont.css';
import BuildPlan from './components/BuildPlan/BuildPlan';
import Registar from './components/Register/Register';
import ForgotPass from './components/ForgotPass/ForgotPass';
import Updates from './components/Updates/Updates';
import Notifications from './components/Notifications/Notifications';
// Settings
import PersonalDetails from './components/Settings/PersonalDetails';
import ChangePass from './components/Settings/ChangePass';
import ChangeEmail from './components/Settings/ChangeEmail';
// Redux import
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' component={Mainpage} exact />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/customers' component={Customers} />
            <Route path='/statistics' component={Statistics} />
            <Route path='/healthp' component={HealthP} />
            <Route path='/nclients' component={Nclients} />
            <Route path='/exeplan' component={ExePlan} />
            <Route path='/buildPlan' component={BuildPlan} />
            <Route path='/notifications' component={Notifications} />
            <Route path='/updates' component={Updates} />
            <Route path='/registarApp' component={Registar} />
            <Route path='/forgotPass' component={ForgotPass} />
            {/* Settings Routes */}
            <Route path='/personalDetails' component={PersonalDetails} />
            <Route path='/changePass' component={ChangePass} />
            <Route path='/changeEmail' component={ChangeEmail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
