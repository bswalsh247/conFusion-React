import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';


// we have lifted the state in the MainComponent.js file. It's better to store the state information here.
// the MainComponent has now become the parent component for the MenuComponent and DishdetailComponent
class Main extends Component {

  constructor(props) {
    super(props);

    this.state = { // stores properties related to this component that we can use
        // storing information about the dishes in the menu component state. 
    // We use this info to render the menu items.
      dishes: DISHES, // dishes is the JS object for the DISHES we imported 
      // now our state information that contains all the dishes are now lifted into the MainComponent.js file and we can 
      // now make this available to the menu component through props 
      selectedDish: null // selected as null because i haven't selected any dishes yet. It's only track dishId now.
    };
  }

  onDishSelect(dishId) { // State should only be modified using setState()
    // onDishSelect receives the dishId as the parameter.
    this.setState({ selectedDish: dishId}); // we want the above "selectedDish" to point to our "dishId" parameter so
    // to do that we need to change the state which requires us to use the this.setState() function call. 
    // This will result in whenever the "onDishSelect" function is called then "this.setState()" will ensure this
    // "selectedDish: dishId" will be set equal to the "dishId" that is recieved as the parameter. "selectedDIsh" will 
    // no longer be "null".
}

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container"> 
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /* now the dishes that we have defined in the state above 
        is now made available as props to our Menu component.*/
        onClick={(dishId) => this.onDishSelect(dishId)}/> {/*when onClick is invoked it will pass this dishId parameter to onDishSelect and be used at it's parameter. */}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> 
    {/*This arrow "=>" function helps to select out all those dishes for which the dishId matches the selected dish, 
which contains the dishId of the selected dish. So it will compare the dishId with each dish of that and then extract
that out.  The "filter" function will give the subarray of the dishes. So I will have to select the first item from the
array which is why I have to select the item in index "[0]". By doing this we are selecting the specific dish which is the
selected dish and then passing that dish info to the dishDetail component*/}
      </div>
    );
  }
}

export default Main;
