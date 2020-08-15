import React, {Fragment} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';

const ScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const Body = styled.View`
  background: ${Colors.white};
`;

const SectionContainer = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const ScrtionDescription = styled.Text`
  margin-top: 32px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = styled.Text`
  font-weight: 700;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsertAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <ScrtionDescription>Step One</ScrtionDescription>
            </SectionContainer>
          </Body>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
