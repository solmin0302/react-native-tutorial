import React, {useContext} from 'react';
import styled from 'styled-components/native';
import TodoContext from '~/Store/Context/Context';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';

interface Props {}

const TodoListBlock = styled(FlatList)``;
const TextBlock = styled.Text``;

const EmptyItemBlock = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const EmptyItem = ({}: Props) => {
  return (
    <EmptyItemBlock>
      <TextBlock>+ 를 눌러 할 일 등록</TextBlock>
    </EmptyItemBlock>
  );
};

const TodoList = ({}: Props) => {
  const {todoList, removeTodoList} = useContext<ITodoListContext>(TodoContext);

  return (
    <TodoListBlock
      data={todoList}
      keyExtractor={(item, index) => {
        return `todo-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && {flex: 1}}
    />
  );
};

export default TodoList;
