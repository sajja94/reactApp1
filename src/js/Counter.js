import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
   

  increment(){
    }

  decrement(){
    }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }

  mapStateToProps(state) {
      return{
          count: state.count
      };
  }

}export default connect(mapStateToProps)(Counter);
