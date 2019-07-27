import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentShow from '../components/Comments/CommentShow'
import CommentForm from '../components/Comments/CommentForm'

class CommentContainer extends Component {
    render() {
        return (
            <div>
            
                {this.props.attractions.find(e => e.id === this.props.attractionId).comments.map(comment => 
                <CommentShow key={comment.id} comment={comment}/>
                )}
                <CommentForm attractionId={this.props.attractionId}/>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
      attractions: state.attractions,
    }
  }

export default connect(mapStateToProps)(CommentContainer)
