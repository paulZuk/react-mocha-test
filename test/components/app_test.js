// import { renderComponent, expect } from '../testConfig';
// import App from '../../src/js/components/App';

// describe('App' , () => {

//   let component;

//   beforeEach(()=>{
//     component = renderComponent(App);
//   });

//   it('shows a CommentBox', ()=> {
//     expect(component.find('.comment-box')).to.exist;
//   });
//   it('shows a CommentList', ()=> {
//     expect(component.find('.comment-list')).to.exist;
//   });

//   it('contains class container', ()=> {
//     expect(component).to.has.class('container');
//   });
// });

//Enzyme///

import App from '../../src/js/components/App';
import CommentBox from '../../src/js/components/CommentBox';
import CommentList from '../../src/js/components/CommentList';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

describe('App', () => {
  let component;
  
  beforeEach(() => {
    component = shallow(<App />);
    
  });

  it('contains class container', () => {
    expect(component.find('.container')).to.have.length(1);
  });

  it('shows a CommentBox', ()=> {
    expect(component.find(CommentBox)).to.have.length(1);
  });
  it('shows a CommentList', ()=> {
    expect(component.find(CommentList)).to.have.length(1);
  });
});

