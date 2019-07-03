import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

// App component is now ready to make use of our MainComponent
class App extends Component {

  // render MainComponent to index.js file. 
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
