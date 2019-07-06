import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {

        // We are making use of the dishes array of JS objects.
        // What is "const"? In JavaScript, constants are declared with const keyword and assigned at the time of the declaration. 
        // A constant can be global or local to a function where it is declared. Constants are read-only, 
        // therefore you can not modify them later on.
        const menu = props.dishes.map((dish) => {
            return (
                // "keys" should be given to elements inside the array to help indentify which items changed,
                // are added or removed
                <div key={dish.id} className="col-12 col-md-5 m-1"> {/* col-12 means that for extra-small to small screen sizes I'm laying out one card below the other in the row. col-md-5 means that for medium to extra large screens I'm going to layout cards side by side, with each card occupying five columns in my row. */}
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });
    
        return (
            // {menu} is a javasript variable. Yes, you can make use of JS variables in your JS code 
            //when this "renderDish" function is called that will return the selected dish in the form of a card
            // in DishDetail we are passing the selected dish information as props to the DishdetailComponent.
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu} 
                </div>
            </div>
        );    
    }



export default Menu;