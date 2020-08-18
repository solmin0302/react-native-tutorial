import {observable, action, decorate} from 'mobx';
import Counter from '~/components/Counter';
import {observer} from 'mobx-react';

// class CounterStore {
//   @observable counter = [{counterNum: 0}];

//   handleAddCounter = () => {
//     this.counter.push({counterNum: 0});
//   };

//   handleRemoveCounter = () => {
//     this.counter.pop();
//   };

//   @action handleIncrement = ({index}) => {
//     this.counter[index].counterNum += 1;
//   };

//   handleDecrement = ({index}) => {
//     this.counter[index].counterNum -= 1;
//   };
// }
const CounterStore = observable(() => {
  const counter = [{counterNum: 0}];
  const handleAddCounter = () => {
    this.counter.push({counterNum: 0});
  };

  const handleRemoveCounter = () => {
    this.counter.pop();
  };

  const handleIncrement = ({index}) => {
    this.counter[index].counterNum += 1;
  };

  const handleDecrement = ({index}) => {
    this.counter[index].counterNum -= 1;
  };
});

export default CounterStore;
