const Todolist = require('./addFile.js');
// addFunction testing

const description = 'burak';
const completed = true;
const index = 5;

describe('is addFile is working', () => {
  test('add list element', () => {
    expect(Todolist.addtask(description, completed, index).toBe(6));
  });
});
