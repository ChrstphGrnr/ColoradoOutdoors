import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import {addComment} from '../../actions/comments'
import {connect } from 'react-redux'

class CommentForm extends Component {

    state = {
        name: '', 
        content: ''
    }

    handleChange = (event) => {
        // debugger
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{ 
        event.preventDefault();
        this.props.addComment(this.state, this.props.attractionId);
        event.target.reset();
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="formBasicText">
                      <Form.Label className="text-muted">  We'd love to hear your comment about this place!</Form.Label>
                      <Form.Control name="content" onChange={this.handleChange} type="text" size="sm" placeholder="Tell us what you love about this place!" />
                    </Form.Group>                    
                    <Form.Group controlId="formBasicName">
                      <Form.Control name="name" onChange={this.handleChange} type="text" size='sm' placeholder="Your Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit your Comment!
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(null, {addComment})(CommentForm);
