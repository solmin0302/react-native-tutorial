import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const Label = styled.Text`
  flex: 1;
`;

const Container = styled.View``;

interface Props {
  todoList: any;
}
const TodoItem = ({todoList}: Props) => {
  const {text, done} = todoList;

  return (
    <Container>
      <Label>{text}</Label>
    </Container>
  );
};

export default TodoItem;
