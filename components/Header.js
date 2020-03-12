import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../containers/Home";
import Todo from "../containers/Todo";
import ContactUs from "../containers/ContactUs";
import FormikForm from "../containers/FormikForm";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              home
            </Button>
            <Button color="inherit" component={Link} to="/todo">
              todo
            </Button>
            <Button color="inherit" component={Link} to="/contactus">
              contact us
            </Button>
            <Button color="inherit" component={Link} to="/formikform">
              formik form
            </Button>
          </Toolbar>
        </AppBar>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/formikform">
            <FormikForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
