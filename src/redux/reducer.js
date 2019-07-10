import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

//this is where we setup our state

export const initialState = { 
    dishes: DISHES, // dishes is the JS object for the DISHES we imported 
    // now our state information that contains all the dishes are now lifted into the MainComponent.js file and we can 
    // now make this available to the menu component through props 
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};