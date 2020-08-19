import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;
interface Props {}
const Loading = ({}: Props) => {
  return (
    <Container>
      <ActivityIndicator color="#E70915" size="large" />
    </Container>
  );
};

export default Loading;
