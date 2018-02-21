import React, { Component } from 'react';
import CommentBox from './CommentBox';

export default class App extends Component {
    render() {
        return (
            <div className="container app">
                <CommentBox />
            </div>
            
        );
    }
}