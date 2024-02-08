import React from "react";

// 클래스형 컴포넌트를 사용하는 이유 => state를 사용하기 위해
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count:0,
  }
  add = () => {
    this.setState(current => ( 
      {count: current.count + 1,}
      ));
  };
  minus = () => {
    this.setState(current => (
      {count: current.count -1,}
    ));
  };
  componentDidMount() {
    console.log("conmponent rendered");
  }
  componentDidUpdate() {
    console.log('I just update!');
  }
  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    

    );
  }
}
export default App;
