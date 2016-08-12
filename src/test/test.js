import assert from 'assert';
import Person from '../modules/person';

describe('Person', () => {
    describe('name', () => {
        it('名前が一致すること', () => {
            assert.equal(new Person('shule').toString(), 'shule');
        });
    });
});
