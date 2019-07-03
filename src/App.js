import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
// import DishDetail from './components/DishdetailComponent';

// we have lifted the state in the App.js file. It's better to store the state information here.
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES // dishes is the JS object for the DISHES we imported above this file
      // now our state information that contains all the dishes are now lifted into the App.js file and we can 
      // now make this available to the menu component through props from the App.js file. 
    }
  }

  // the App component has now become the parent component for the meunu component
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container"> 
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/> {/* now the dishes that we have defined in the state of the App component 
        is now made available as props to our Menu component. Now this dishes information will be made available 
        in our Menu component}
        {/* <DishDetail dish={this.state.dish} comments={this.state.comments}/> */}
      </div>
    );
  }
}

export default App;
