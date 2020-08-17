import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Sample from './components/Sample';
import {StyleSheet, ScrollView} from 'react-native';

function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <CounterContainer /> */}
      <Sample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6F6F6',
    paddingTop: '15%',
  },
});

export default App;
