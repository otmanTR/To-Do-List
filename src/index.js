// import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'Write a  ',
    complated: false,
    index: 1,
  },
  {
    description: 'On page  tasks ',
    completed: false,
    index: 2,
  },
  {
    description: 'The list should aalues for each task.',
    completed: false,
    index: 3,
  },
  {
    description: 'Create a styler t List',
    completed: false,
    index: 4,
  },
];

const taskList = document.querySelector('.taskList');

const generateTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const tsk = tasks[i];
    taskList.innerHTML += `<li class="task flex">
    <input type="checkbox" id="checked" name="checked" >
    <label class="label" id="label" for="checked">${tsk.description}</label>
    <i class="fa-solid fa-ellipsis-vertical"></i>
   </li>`;
  }
};

window.onload = generateTask();
