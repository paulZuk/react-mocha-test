// import { renderComponent, expect } from '../testConfig';
// import CommentList from '../../src/js/components/CommentList';


// describe('CommentBox', () => {
//     let component;

//     beforeEach(() => {
//         const props = {comments: ['New Comment', 'Other comment']};
//         component = renderComponent(CommentList,null, props);
//     });

//     it('shows an li for each comment', () => {
       
//         expect(component.find('li').length).to.equal(2);
//     });

//     it('shows each comment that is provided', () => {
//         expect(component).to.contain('New Comment');
//         expect(component).to.contain('Other comment');
//     });
// });

//Enzyme

import CommentList from '../../src/js/components/CommentList';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import configureStore from 'redux-mock-store';

describe('CommentList',() => {
    let component;
    let store;
    let mockStore = configureStore();

    beforeEach(() => {
        const state = {comments: ['New Comment', 'Other comment']};
        store = mockStore(state)
        component = shallow(<CommentList store={store}/>).dive();
    });

    it('shows an li for each comment', () => {
       
        expect(component.find('li')).to.have.length(2);
    });

    it('shows each comment that is provided', () => {
        expect(component.contains('New Comment')).to.equal(true);
        expect(component.contains('Other comment')).to.equal(true);
    });
});