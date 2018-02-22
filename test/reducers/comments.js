import { expect } from '../testConfig';
import commentsReducer from '../../src/js/reducers/comments';
import { SAVE_COMMENT } from '../../src/js/actions/types';

describe('comments reducer', () => {

    it('handle unknown action', () => {
        const reducer = commentsReducer(undefined, {});
        expect(reducer).to.eql([]);
    });

    it('handle SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment'};
        const reducer = commentsReducer([], action);

        expect(reducer).to.be.an('array').that.includes('new comment');
    });
});
