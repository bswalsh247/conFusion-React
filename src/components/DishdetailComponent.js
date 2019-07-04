import React from 'react'; // this allows me to create a React function 
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
    
    // function that takes the comments array as parameter
    function RenderComments({comments}) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                // access an inner property in a JavaScript object that itself points to an array 
                // of JavaScript objects. e.g. comment.author.
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className="lsit-unstyled">
                    {cmnts}
                </ul>
            </div>
        )
    }

    // now once the "dish" is selected, we want to render the details of that dish. We use the "renderDish" method for ths.
    function RenderDish({dish}) { // // this is how we render the the selected dish on the screen. We make use of "renderDish" at the bottom of the code 
        if (dish != null) { // if rendered dish is not null. 
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div> // if no dish and is null, nothing will be returned but an empty div. 
            )
        }
    }

    const DishDetail = (props) => {
        if (props.dish != null) 
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            );
        else {
            return (
                <div></div>
            )
        }
    }
    

export default DishDetail;