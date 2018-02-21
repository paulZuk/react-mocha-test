import { renderComponent, expect } from '../testConfig';
import App from '../../src/js/components/App';

describe('App' , () => {

  let component;

  beforeEach(()=>{
    component = renderComponent(App);
  });

  it('shows a CommentBox', ()=> {
    expect(component.find('.comment-box')).to.exist;
  });

  it('contains class container', ()=> {
    expect(component).to.has.class('container');
  });




});

