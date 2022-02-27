import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Info from './info';
import Control from './control';
import './index.css';
import './main.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="left-side">
          <Main length="10" height="10"/>
          <Info />
        </div>
        <div className="right-side">
          <Control />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);