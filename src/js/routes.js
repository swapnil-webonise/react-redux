import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HomeComponent from './components/Home';


class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={HomeComponent} />
        </Router>
      </Provider>
    );
  }
}

export default Root;