// import _ from 'lodash';
import './style.css';

const tasks = [
  {
    discription: 'Write a  ',
    complated: false,
    index: 1,
  },
  {
    discription: 'On page  tasks ',
    completed: false,
    index: 2,
  },
  {
    discription:
      'The list should aalues for each task.',
    completed: false,
    index: 3,
  },
  {
    discription: 'Create a styler t List',
    completed: false,
    index: 4,
  },
];

const taskList = document.querySelector('.taskList');
let checkBoxInput = document.createElement('input');

const generateTask = () => {
  for (let i = 0; i < tasks.length; i++) {
    const tsk = tasks[i];
    taskList.innerHTML += `<li class="task flex">
    <input type="checkbox" id="checked" name="checked" >
    <label class="label" id="label" for="checked">${tsk.discription}</label>
    <i class="fa-solid fa-ellipsis-vertical"></i>
   </li>`;
    checkBoxInput = true;
  }
};

window.onload = generateTask();