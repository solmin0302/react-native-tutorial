import React from 'react';
import styled from 'styled-components/native';
import TodoListViewContainer from './TodoListViewContainer';

const Container = styled.View`
  flex: 1;
`;

interface Props {}
const Todo = () => {
  return (
    <Container>
      <TodoListViewContainer />
      <AddTodo />
    </Container>
  );
};

export default Todo;
