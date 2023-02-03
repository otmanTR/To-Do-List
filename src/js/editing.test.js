const Todolist = require('./editing.js');
const Tasks = require('./tasks.js');
// editing testing

describe('testing editing task', () => {
  const arr = new Todolist();
  let description = 'burak';
  const completed = true;
  const index = 1;
  let additem = arr.addtask(description, completed, index);
  test('updating description', () => {
    description = "christian";
    const newDescription = arr.updateTask(0, description);
    expect(newDescription).toBe('christian');
  });
});