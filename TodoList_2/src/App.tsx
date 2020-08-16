import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import TodoListContainer from './containers/TodoListContainer';
import Todo from './containers/Todo';

const Container = styled.View`
  flex: 1;
  background-color: #ffe3e3;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <TodoListContainer>
      <Container>
        <Todo />
      </Container>
    </TodoListContainer>
  );
};

export default App;
