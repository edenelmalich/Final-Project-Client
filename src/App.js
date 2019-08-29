import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Statistics from './components/Statistics';
import Customers from './components/Customers';
import HealthP from './components/HealthP';
import Nclients from './components/Nclients';
import ExePlan from './components/ExePlan';
import Mainpage from './components/Mainpage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import "./css/CssFont.css";
import BuildPlan from './components/BuildPlan';
import Registar from './components/Registar';
import ForgotPass from './components/ForgotPass';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
      <Route path="/" component={Mainpage} exact/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/customers" component={Customers}/>
      <Route path="/statistics" component={Statistics}/>
      <Route path="/healthp" component={HealthP}/>
      <Route path="/nclients" component={Nclients}/>
      <Route path="/exeplan" component={ExePlan}/>
      <Route path="/buildPlan" component={BuildPlan}/>
      <Route path="/registarApp" component={Registar}/>
      <Route path="/forgotPass" component={ForgotPass}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
