import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { simpleAction } from "./actions";
import { Route, BrowserRouter } from "react-router-dom";
import { names } from "./names";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";

class App extends Component {
  simpleAction() {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route
                path={names.nameOne.route}
                component={() => <h1>{names.nameOne.name}</h1>}
              />
              <Route path="/topics" component={() => <h1>Topics </h1>} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  { simpleAction }
)(App);
