import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// Each component can store its own local information in its "state"
// - Private and fully contolled by the component 
// - Can be passed as props to children
class Menu extends Component {

    constructor(props) { // in order to store the state, you need to define the state in the constructor of the class component.
        super(props); // super class is required whenever you define a class component. It's a way of passing data between
        // different components.
        }

    render() {
        // We are making use of the dishes array of JS objects.
        // What is "const"? In JavaScript, constants are declared with const keyword and assigned at the time of the declaration. 
        // A constant can be global or local to a function where it is declared. Constants are read-only, 
        // therefore you can not modify them later on.
        const menu = this.props.dishes.map((dish) => {
            return (
                // "keys" should be given to elements inside the array to help indentify which items changed,
                // are added or removed
                <div key={dish.id} className="col-12 col-md-5 m-1"> {/* col-12 means that for extra-small to small screen sizes I'm laying out one card below the other in the row. col-md-5 means that for medium to extra large screens I'm going to layout cards side by side, with each card occupying five columns in my row. */}
                    <Card onClick={() => this.props.onClick(dish.id)}> {/*When I select one of these dishes they will become equal to the selectedDish changing it from null.*/}
                    {/* When I click on the above card using the onClick handling event, that card information is passed into the method called onDishSelect method.*/}
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');

        
        return (
            // {menu} is a javasript variable. Yes, you can make use of JS variables in your JS code 
            //when this "renderDish" function is called that will return the selected dish in the form of a card
            // in DishDetail we are passing the selected dish information as props to the DishdetailComponent.
            <div className="container">
                <div className="row">
                    {menu} 
                </div>
            </div>
        );
    }
}

export default Menu;