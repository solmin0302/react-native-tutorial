import React from 'react';
import styled from 'styled-components/native';

interface Props {
  text: string;
  onDelete: () => void;
}

const Container = styled.View`
  flex-direction: row;
`;
const TextBlock = styled.Text``;

const DeleteButton = styled.TouchableOpacity``;

const TodoItem = ({text, onDelete}: Props) => {
  return (
    <Container>
      <TextBlock>{text}</TextBlock>
      <DeleteButton onPress={onDelete}>X</DeleteButton>
    </Container>
  );
};

export default TodoItem;
