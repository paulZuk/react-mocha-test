import { expect } from '../testConfig';
import { SAVE_COMMENT } from '../../src/js/actions/types';
import { saveComment } from '../../src/js/actions';

describe('actions', () => {
    describe('saveComment', () => {
        it('has correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });
        it('has correct payload', () => {
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    });
});