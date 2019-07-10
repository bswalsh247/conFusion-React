import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// App component is now ready to make use of our MainComponent
class App extends Component {

  // render MainComponent to index.js file. 
  render() {
    return (
      // BrowserRouter creates specialized history object for navigating links
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
