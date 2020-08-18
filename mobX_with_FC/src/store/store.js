import {observable} from 'mobx';

const todo = observable({
  todoList: [
    {
      text: '',
      done: false,
    },
  ],
});

export default todo;
