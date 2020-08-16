import React, {useState, useEffect} from 'react';
import TodoContext from '~/Store/Context/Context';
import {AsyncStorage} from 'react-native';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListContainer = ({children}: Props) => {
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const addTodoList = (todo: string): void => {
    const list = [...todoList, todo];
    setTodoList(list);
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  const removeTodoList = (index: number): void => {
    const list = [...todoList];
    list.splice(index, 1);
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');
      if (list !== null) {
        setTodoList(JSON.parse(list));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initData();
  });
  return (
    <TodoContext.Provider value={{addTodoList, removeTodoList, todoList}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoListContainer;
