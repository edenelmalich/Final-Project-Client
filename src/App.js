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
// Redux import
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Switch>
              <Route path='/' component={Mainpage} exact />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/customers' component={Customers} />
              <Route path='/statistics' component={Statistics} />
              <Route path='/healthp' component={HealthP} />
              <Route path='/nclients' component={Nclients} />
              <Route path='/exeplan' component={ExePlan} />
              <Route path='/buildPlan' component={BuildPlan} />
              <Route path='/updates' component={Updates} />
              <Route path='/registarApp' component={Registar} />
              <Route path='/forgotPass' component={ForgotPass} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
