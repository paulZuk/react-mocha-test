// import { renderComponent, expect } from '../testConfig';
// import CommentBox from '../../src/js/components/CommentBox';

// describe('CommentBox', () => {
//     let component;

//     beforeEach(()=> {
//         component = renderComponent(CommentBox);
//     });

//     it("has class 'comment-box'", ()=> {
//         expect(component).to.have.class('comment-box');
//     });

//     it('has text area', ()=> {
//         expect(component.find('textarea')).to.exist;
//     });

//     it('has button', ()=> {
//         expect(component.find('button')).to.exist;
//     });

//     describe('entering some text', ()=> {

//         beforeEach(()=> {
//             component.find('textarea').simulate('change', 'new comment');
//         });

//         it('shows text that is entered',()=> {
//             expect(component.find('textarea')).to.have.value('new comment');
//         });
    
//         it('when submitted clears input', ()=> {
//             component.simulate('submit');
//             expect(component.find('textarea')).to.have.value("");
//         });
//     });
    
// });

// Enzyme //

import WrappedCommentBox, { CommentBox } from '../../src/js/components/CommentBox';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

describe('CommentBox', () => {
    let component;
    let store;
    const initialState = {};
    const mockStore = configureStore();
    
    beforeEach(() => {
        store = mockStore(initialState);
        component = shallow(<WrappedCommentBox store={store} />).dive();
    });

    it('has class comment-box', () => {
        expect(component.hasClass('comment-box')).to.equal(true);
    });
    it('has textarea', ()=> {
        expect(component.find('textarea')).to.have.length(1);
    });
    it('has button', ()=> {
        expect(component.find('button')).to.have.length(1);
    });
    describe('(textarea) entering some text', ()=> {

        beforeEach(()=> {
            component.find('textarea').simulate('change', { target: { value:'new comment' }});                 
        });

        it('shows text that is entered',()=> {
            expect(component.find('textarea').props().value).to.equal('new comment');
        });
    
        it('when submitted clears input', ()=> {
            component.find('form').simulate('submit', { preventDefault() {}}); 
            expect(component.find('textarea').props().value).to.equal("");
        });
        it('handle correct click funciton', () => {
            const handleClick = sinon.spy(CommentBox.prototype, 'handleClick');
            component = shallow(<CommentBox />);
            component.find('button').simulate('click');
            expect(handleClick.called).to.equal(true);  
        });
    });
});