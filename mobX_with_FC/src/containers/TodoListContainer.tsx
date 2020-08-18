import React from 'react';
import styled from 'styled-components/native';

import TodoList from '~/components/TodoList';

const SafeViewBlock = styled.SafeAreaView`
  flex: 1;
`;
interface Props {
  sampleTodoList: Array<string>;
}

const sampleTodoList = [
  {
    text: '인터넷 연결 안됨',
    done: false,
  },
  {
    text: 'asd 연결 안됨',
    done: false,
  },
  {
    text: 'zzz 연결 zz',
    done: false,
  },
];
const TodoListContainer = () => {
  return (
    <SafeViewBlock>
      <TodoList todoList={sampleTodoList} />
    </SafeViewBlock>
  );
};

export default TodoListContainer;
