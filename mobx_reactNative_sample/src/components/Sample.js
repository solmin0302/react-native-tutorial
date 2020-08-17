import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {Text} from 'react-native';

var timerDate = observable({
  secondsPassed: 0,
});

console.log(timerDate);
setInterval(() => {
  timerDate.secondsPassed++;
}, 1000);
const Timer = observer(({timerDate}) => {
  return <Text>{timerDate.secondsPassed === undefined (<Text>asd</Text>):(<Text>11</Text>)}</Text>;
});

export default Timer;
