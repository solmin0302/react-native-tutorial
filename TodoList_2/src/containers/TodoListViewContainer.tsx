import React from 'react';
import styled from 'styled-components/native';
import TodoList from '~/components/TodoList';

const HeaderBlock = styled.View`
  height: 400px;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const TodoListViewBlock = styled.View`
  flex: 1;
`;

interface Props {}
const Header = ({}: Props) => {
  return (
    <HeaderBlock>
      <TitleLabel>TOdoLIST</TitleLabel>
    </HeaderBlock>
  );
};

const TodoListView = ({}: Props) => {
  return (
    <TodoListViewBlock>
      <Header />
      <TodoList />
    </TodoListViewBlock>
  );
};

export default TodoListView;
