import React from 'react';
import styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = styled.View`
  flex: 1;
  background-color: #e599f7;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <Container>
      <Counter title="first Counter App" initValue={5} />
    </Container>
  );
};

export default App;
