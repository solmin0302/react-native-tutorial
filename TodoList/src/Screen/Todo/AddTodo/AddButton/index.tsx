import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  bottom: 40px;
  align-self: center;
  justify-content: flex-end;
`;

const ButtonContainer = styled.TouchableOpacity`
  box-shadow: 4px 4px 8px #999;
`;

const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

interface Props {
  onPress?: () => void;
}

const AddButton = ({onPress}: Props) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('../../../../Assets/Image/add.png')} />
      </ButtonContainer>
    </Container>
  );
};

export default AddButton;
