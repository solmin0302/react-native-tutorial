import {decorate, observable, action} from 'mobx';

class CounterStore {
  counter = [{counterNum: 0}];

  handleAddCounter = () => {
    this.counter.push({counterNum: 0});
  };

  handleRemoveCounter = () => {
    this.counter.pop();
  };

  handleIncrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum + 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };

  handleDecrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum - 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };
}
decorate(CounterStore, {
  counter: observable,
  handleAddCounter: action,
  handleRemoveCounter: action,
  handleIncrement: action,
  handleDecrement: action,
});

export default new CounterStore();
