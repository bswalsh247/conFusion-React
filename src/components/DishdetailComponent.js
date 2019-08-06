import React, {Component} from 'react'; // this allows me to create a React function 
import { Card, CardImg, CardText, CardBody,Modal, ModalHeader, ModalBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button , Row, Col, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
    
    // function that takes the comments array as parameter
    function RenderComments({comments, postComment, dishId}) {
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
                <ul className="list-unstyled">
                    {cmnts}
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        )
    }

    // now once the "dish" is selected, we want to render the details of that dish. We use the "renderDish" method for ths.
    function RenderDish({dish}) { // // this is how we render the the selected dish on the screen. We make use of "renderDish" at the bottom of the code 
        if (dish != null) { // if rendered dish is not null. 
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
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
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) 
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id}
                        />
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

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen:false
        };

      }
    toggleModal=()=>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }
      handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
      render() {
        return (
            <React.Fragment>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="Rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                    <Row className="form-group">
                                <Label htmlFor="author" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                            />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="Comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:1, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </React.Fragment>
        )
      }
    }

