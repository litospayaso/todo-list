import React, { Component } from 'react';
import './Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          Home
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
