const {expect} = require('chai');
const {addList} = require('../actions/actions');
const {editList} = require('../actions/actions');

describe('action creators', () =>{
    describe('addList()', () =>{
        const expectedType = "LIST_ADD";
        const expectedListName = "Test";
        const actual = addList("Test");
        it('gives the expected item type', () =>{
            expect(actual.type).to.equal(expectedType);
        });
        it('gives the expected list name which it is passed to it', () =>{
            expect(actual.listName).to.equal(expectedListName);
        })
    });
    describe('editList()', () => {
        const originalList = {
            test:"test", 
        };
        const expectedListName = "Test2";
        const actual = editList("Test2", originalList);
        it('updates an existing list with a new value', () =>{
            expect(actual.listName).to.equal(expectedListName);
            expect(actual).not.to.eql(originalList);
            console.log(actual);
            console.log("--------------------------------");
            console.log(originalList);
        })
    })
})

