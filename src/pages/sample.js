import React from "react";

class Sample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    // normaly it is mentioned to call an api it should call from this method
  }

  static getDerivedStateFromProps(props, state) {
    return { state };
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeCount}>GO </button>
        {this.state.count}
      </div>
    );
  }
}

export default Sample;
