import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({
            comment: event.target.value
        });
    }
    handleClick() {
        console.log('test');
        
    }
    handleSubmit(event) {
        event.preventDefault();
        
        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ""
        });
    }
    render() {
        
        return ( 
            <form onSubmit={this.handleSubmit} className="row comment-box">
                <textarea 
                    value={this.state.comment} 
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);