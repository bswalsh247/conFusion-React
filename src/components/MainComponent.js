import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';

// these will props will now be able to connect to Main Component
const mapStateToProps = state => {
      return {
          dishes: state.dishes,
          comments: state.comments,
          promotions: state.promotions,
          leaders: state.leaders
      }
}
// A component returns a set of React elements that should appear on the screen
// Components enable you to split your UI into independent, reusable pieces
// Components also accept inputs
// Different kinds of components can be defined in React
// Each component can store its own local information in its "state"
// - Private and fully contolled by the component 
// - Can be passed as props to children
// we have lifted the state in the MainComponent.js file. It's better to store the state information here.
// the MainComponent has now become the parent component for the MenuComponent and DishdetailComponent
class Main extends Component { // this creates new component 

    constructor(props) { // in order to store the state, you need to define the state in the constructor of the class component.
        super(props); // super class is required whenever you define a class component. It's a way of passing data between
        // different components.
  }

    render() {  // any class component in react needs to implent this component 
    // called render which should return the corresponding view for this component

    const HomePage = () => {
        return(
            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
             promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
             leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                postComment={this.props.postComment}
            />
        );
    }

    return (
      <div>
        <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
                <Redirect to="/home" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));