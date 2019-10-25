/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{Component} from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "./components/Login"
import Signup from "./components/Signup"

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();
class App extends Component {
  constructor() {
    super();
    const existingToken = localStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?api_key"
        ? window.location.search.split("=")[1]
        : null;
    if (accessToken) {
      localStorage.setItem("token", accessToken);
    }
    this.state = { 
      token: existingToken || accessToken
     }
  }
  render() { 
    console.log("=====", this.state.token)
    return (
      <Router history={hist}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin" render={(props)=><Admin token={this.state.token} {...props}/>}  />
        <Route path="/rtl" component={RTL} />
        
      </Switch>
    </Router>
      );
  }
}
 
export default App;

ReactDOM.render(
  // <Router history={hist}>
  //   <Switch>
  //     <Route exact path="/" component={Login} />
  //     <Route  path="/signup" component={Signup} />
  //     <Route path="/admin" component={Admin} />
  //     <Route path="/rtl" component={RTL} />
  //     <Redirect from="/" to="/admin/dashboard" />
  //   </Switch>
  // </Router>,
  <App />,
  document.getElementById("root")
);
