import React, {createContext} from 'react';

const TodoContext = createContext<ITodoListContext>({
  todoList: [],
  addTodoList: (todo: string): void => {},
  removeTodoList: (index: number): void => {},
});

export default TodoContext;
