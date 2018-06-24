import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { names } from "./../names";


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {names.brand}
        </Link>
      </nav>
    );
  }
}
