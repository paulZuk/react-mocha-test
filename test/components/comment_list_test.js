import { renderComponent, expect } from '../testConfig';
import CommentList from '../../src/js/components/CommentList';


describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        const props = {comments: ['New Comment', 'Other comment']};
        component = renderComponent(CommentList,null, props);
    });

    it('shows an li for each comment', () => {
       
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other comment');
    });
});