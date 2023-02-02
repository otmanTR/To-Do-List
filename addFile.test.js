const Todolist = require('./addFile.js');
// addFunction testing
const additem = new Todolist;
const description = 'burak';
const completed = true;
const index = 5;

describe('is addFile is working', () => {
  test('add list element', () => {
    additem.addtask(description, completed, index);
    expect(additem.toHaveLength(1));
  });
});
