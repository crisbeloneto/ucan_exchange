import React, { Component } from 'react';
import Identicon from 'identicon.js';
import './App.css';

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark fixed-top fg-dark flex-md-nowrap p-0">
            <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            >
            UCAN Exchange
            </a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                    <small className="text-secondary">
                        <small id="account">{this.props.account}</small>
                    </small>
                    {
                    this.props.account
                    ? <img
                      className="ml-2"
                      width='30'
                      height='30'
                      src={`data:image/png; base64, ${new Identicon(this.props.account, 30).toString()}`}
                      alt=""
                      />
                    : <span></span>
                    }
                </li>
            </ul>
        </nav>
    );
  }
}

export default Navbar;
