import React from 'react';
import {observer, useObserver} from 'mobx-react-lite';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

// interface TProps {
//   todo: any;
// }
const Layout = styled.ScrollView`
  flex: 1;
  justify-content: center;
  align-items: center;
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

// const Todo2 = ({todo}: TProps) =>
//   useObserver(() => <Text>{todo.counter}</Text>);

const App = ({}: Props) => {
  return (
    <ScrollView>
      <TodoList todoList={sampleTodoList} />
      <AddTodo />
    </ScrollView>
  );
};

export default App;
