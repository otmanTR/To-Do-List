const Todolist = require('./editing.js');
// editing testing

describe('testing editing task', () => {
  const arr = new Todolist();
  const description = 'burak';
  const completed = true;
  const index = 1;
  const additem = arr.addtask(description, completed, index);
  console.log(additem);
  const Tasks = additem[0];
  test('updating description', () => {
    const newDescription = arr.updateTask(Tasks, "Christian");
    expect(newDescription).toBe('Christian');
  });
});