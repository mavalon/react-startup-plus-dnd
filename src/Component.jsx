import React from 'react';
import Board from './components/Board';
import { observe } from './utils/Game';

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.unobserve = observe(this.handleChange.bind(this));
  }

  handleChange(knightPosition) {
    const nextState = { knightPosition };

    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }

  render() {
    const { knightPosition } = this.state;

    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <Board size='800px' knightPosition={knightPosition} />
    );
  }
}
Component.propTypes = {
  onRender: React.PropTypes.func
};

export default Component;
