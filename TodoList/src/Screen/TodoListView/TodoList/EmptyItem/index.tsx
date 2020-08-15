import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text``;

interface Props {}

const EmptyItem = ({}: Props) => {
  return (
    <Container>
      <Label>+를 눌러 할 일을 등록하세요.</Label>
    </Container>
  );
};

export default EmptyItem;
