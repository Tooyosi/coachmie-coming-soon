import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Landing from "../pages/Landing";
import ScrollToTop from "../components/common/ScrollToTop";
import { ToastContainer } from 'react-toastify';


const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route path="/" component={Landing} />
        <Redirect from="*" to="/"/>
      </Switch>
      <ToastContainer />
    </ScrollToTop>
  </Router>
);

export default Routes;
