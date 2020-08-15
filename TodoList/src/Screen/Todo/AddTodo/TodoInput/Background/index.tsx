import React, {useContext} from 'react';
import styled from 'styled-components/native';

import {TodoListContext} from '../../../../../Context/TodoListContext';

const Container = styled.TouchableWithoutFeedback`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const BlackBackground = styled.View`
  background-color: #000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
`;

interface Props {
  onPress: () => void;
}

const Background = ({onPress}: Props) => {
  const {addTodoList} = useContext<ITodoListContext>(TodoListContext);
  return (
    <Container onPress={onPress}>
      <BlackBackground />
    </Container>
  );
};

export default Background;
