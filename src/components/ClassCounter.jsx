import { Component } from 'react';
import '../styles/Counter.css';

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
        <div className="counter-btn-wrapper">
          <button className="counter-btn" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="counter-btn" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
