import React, {useState} from 'react';
import styled from 'styled-components/native';

const AddButton = styled.TouchableOpacity``;
const Container = styled.View``;
interface Props {}
interface InputProps {
  hideTodoInput: () => void;
}

const TodoInput = ({hideTodoInput}: InputProps) => {
  
}

const AddTodo = ({}: Props) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <Container>
      <AddButton onPress={() => setShowInput(true)} />
      {
        showInput && <TodoInput hideTodoInput = {() => setShowInput(false)}
      }
    </Container>
  );
};

export default AddTodo;
