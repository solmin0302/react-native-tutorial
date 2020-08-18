import React from 'react';
import styled from 'styled-components/native';
import TodoItem from './TodoItem';
import {FlatList} from 'react-native';
import {Text} from 'react-native';

// const TodoListBlock = styled.SafeAreaView``;
const DataShown = styled(FlatList)``;
const EmptyItem = () => {
  return <Text>no data</Text>;
};
interface Props {
  todoList: Array<any>;
}
const TodoList = ({todoList}: Props) => {
  return (
    <DataShown
      data={todoList}
      keyExtractor={(item, index) => {
        return `todo-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => <TodoItem todoList={item} />}
      contentContainerStyle={todoList.length === 0 && {flex: 1}}
    />
  );
};

export default TodoList;
