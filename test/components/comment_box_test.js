import { renderComponent, expect } from '../testConfig';
import CommentBox from '../../src/js/components/CommentBox';

describe('CommentBox', () => {
    let component;

    beforeEach(()=> {
        component = renderComponent(CommentBox);
    });

    it("has class 'comment-box'", ()=> {
        expect(component).to.have.class('comment-box');
    });

    it('has text area', ()=> {
        expect(component.find('textarea')).to.exist;
    });

    it('has button', ()=> {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', ()=> {

        beforeEach(()=> {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text that is entered',()=> {
            expect(component.find('textarea')).to.have.value('new comment');
        });
    
        it('when submitted clears input', ()=> {
    
        });
    });
    


});