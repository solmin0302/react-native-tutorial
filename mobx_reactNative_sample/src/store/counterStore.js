import {observable, action} from 'mobx';

class CounterStore {
  @observable counter = [{counterNum: 0}];

  handleAddCounter = () => {
    this.counter.push({counterNum: 0});
  };

  handleRemoveCounter = () => {
    this.counter.pop();
  };

  @action handleIncrement = ({index}) => {
    this.counter[index].counterNum += 1;
  };

  handleDecrement = ({index}) => {
    this.counter[index].counterNum -= 1;
  };
}

export default new CounterStore();
