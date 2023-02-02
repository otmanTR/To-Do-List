const Todolist = require('./remove_additem.js');
// addFunction testing

describe('is addFile is working', () => {
 const additem = new Todolist();
 const description = 'burak';
 const completed = true;
 const index = 1;
  test('add list element', () => {
   const add = additem.addtask(description, completed, index);
    expect(add).toHaveLength(1);
    });

   test('remove list element', () => {
    const remove = additem.removetask(1);
     expect(remove).toHaveLength(0);
    });
});
