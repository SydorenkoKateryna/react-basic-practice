import { Component } from 'react';

class ClassCounter extends Component {
  state = {
    count: 0,
  };

  //   1v
  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  //   2v
  handleDecrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
