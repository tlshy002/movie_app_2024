import React from "react";

// 클래스형 컴포넌트를 사용하는 이유 => state를 사용하기 위해
class App extends React.Component {
  state = {
    count:0,
  }
  add = () => {
    console.log('add');
  };
  minus = () => {
    console.log('minus');
  };
  
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button>Add</button>
        <button>Minus</button>
      </div>
    

    );
  }
}
