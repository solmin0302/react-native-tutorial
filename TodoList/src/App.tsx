import React from 'react';
import styled from 'styled-components/native';
import {TodoListContextProvider} from './Context/TodoListContext';
import Todo from './Screen/Todo';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;
