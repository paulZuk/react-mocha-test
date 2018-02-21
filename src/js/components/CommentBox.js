import React, { Component } from 'react';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            comment: event.target.value
        });
    }
    render() {
        return ( 
            <div className="row comment-box">
                <textarea 
                    value={this.state.comment} 
                    onChange={this.handleChange} /> // this.handleChange.bind(this) || e => this.handleChange(e)
                <button>Submit</button>
            </div>
        )
    }
}