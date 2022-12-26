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
import About from "../pages/About";
import Privacy from "../pages/Pricvacy";


const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/" component={Landing} />
        <Redirect from="*" to="/"/>
      </Switch>
      <ToastContainer />
    </ScrollToTop>
  </Router>
);

export default Routes;
