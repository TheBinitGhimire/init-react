import { Component } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();
    this.startDate = new Date("Jan 24, 2022 09:00:00").getTime();
    this.state = {
      days: parseInt(
        Math.abs(
          (new Date().getTime() - this.startDate) / (24 * 60 * 60 * 1000)
        )
      ),
      joined: 1,
      value: parseInt(
        Math.abs(
          (new Date().getTime() - this.startDate) / (24 * 60 * 60 * 1000)
        )
      )
    };
  }

  handleDecrement = () => {
    this.setState({
      days: this.state.days - 1,
      value: Math.abs(this.state.days - 1)
    });
    if (this.state.days <= 0)
      this.setState({
        joined: 0
      });
    
  };

  handleIncrement = () => {
    this.setState({
      days: this.state.days + 1,
      value: Math.abs(this.state.days + 1)
    });
    if (this.state.days > 0) this.setState({ joined: 1 });
  };

  textMessage = () => {
    if (this.state.days === 0) return <h2>Joining today!</h2>;
    if (this.state.joined === 1) return <h2>Days since joining!</h2>;
    else return <h2>Days left to join!</h2>;
  };

  render() {
    return (
      <div>
        <this.textMessage />
        <h1>{this.state.value}</h1>
        <button onClick={this.handleDecrement}>
          <FaMinus />
        </button>
        <button onClick={this.handleIncrement}>
          <FaPlus />
        </button>
      </div>
    );
  }
}

export default Timer;
