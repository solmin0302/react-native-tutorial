import React from 'react';
import styled from 'styled-components/native';
import {Text, TextInput} from 'react-native';

const Contaier = styled.SafeAreaView`
  justify-content: center;
`;
const TextBox = styled.TextInput`
  border: 1px solid black;
`;

interface Props {}

const AddTodo = ({}: Props) => {
  const handleChange = (e) => {};
  return (
    <Contaier>
      <TextInput />
    </Contaier>
  );
};

export default observable(AddTodo);
