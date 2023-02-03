module.exports = class TaskStatus {
  constructor() {
    this.completed = false;
  }
    checked = (task) => {
      return  task.completed = true;
    };
    unchecked = (task) => {
       return task.completed = false;
    };
};