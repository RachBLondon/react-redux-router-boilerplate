import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { names } from "./../names";

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Home </h1>
        <Link to={names.nameOne.route}>{names.nameOne.name}</Link>
      </div>
    );
  }
}

export default connect()(Home);
