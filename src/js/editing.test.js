const Todolist = require('./editing.js');
// editing testing

describe('testing editing task', () => {
  const arr = new Todolist();
  let description = 'burak';
  let completed = true;
  const index = 1;
  let additem = arr.addtask(description, completed, index);
  completed = false;
  additem = arr.addtask(description, completed, index);
 console.log("two item added",additem)
  test('Updating Description', () => {
    description = "christian";
    const newDescription = arr.updateTask(0, description);
    expect(newDescription).toBe('christian')
  });

  test('Clear All completed tasks', () => {
    const newArr = arr.clearAllCompletTask();
    console.log("arr contain this", newArr);
    expect(newArr).toHaveLength(1)
  });

  

});