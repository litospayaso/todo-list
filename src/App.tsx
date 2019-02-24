import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.scss';
// import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
