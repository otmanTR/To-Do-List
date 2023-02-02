const Tasks = require('./src/js/tasks.js');

class Todolist {
  constructor() {
    this.taskData = [];
  }

 static addtask = (description, completed, index) => {
   const newtask = new Tasks(description, completed, index);

   this.taskData.push(newtask);
   index = this.taskData.length + 1;
   if (typeof window !== 'undefined') {
     localStorage.setItem('TodoListDB', JSON.stringify(this.taskData));
   }
   return index;
 }
}
module.exports = Todolist;