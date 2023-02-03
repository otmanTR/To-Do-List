const Todolist = require('./editing.js');
// editing testing

describe('testing editing task', () => {
  const todo = new Todolist();
  let description = 'burak';
  let completed = true;
  const index = 1;
  let additem = todo.addtask(description, completed, index);
  test('Updating Description', () => {
    description = 'christian';
    const newDescription = todo.updateTask(0, description);
    expect(newDescription).toBe('christian');
  });

  test('Clear All completed tasks', () => {
    const newArr = todo.clearAllCompletTask();
    expect(newArr).toHaveLength(0);
  });

  test('changing status', () => {
    let description = 'burak';
    let completed = true;
    const index = 1;
    let additem = todo.addtask(description, completed, index);
    const Updatestatus = todo.Updatestatus(0, description);
    expect(Updatestatus).toBe(true);
  });
});
