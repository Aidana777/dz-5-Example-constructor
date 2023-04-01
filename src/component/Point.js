import React from "react";


class Point extends React.Component {
  constructor(props) {
    
    console.log("--- constructor");

    super(props);
    this.state = {
      points: 0
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("--- getDerivedStateFromProps");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);


    if (nextState.points > nextProps.maxPoints) {
      console.log("points = maxPoints ---> reset points");
      return {
        points: 0
      };
    }

    console.log("points !== maxPoints");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("--- shouldComponentUpdate");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);

    // returns
    // 1. true if rendering is needed
    // 2. false if rendering is not needed
    return nextState.points % 2 === 0;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("--- getSnapshotBeforeUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("--- componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
  }

  componentDidMount() {
    // called once when component is mounted to the DOM
    console.log("--- componentDidMount");
  }

  componentWillUnmount() {
    console.log("--- componentWillUnmount");

  }

  handleAdd = () => {
    this.setState(state => ({
      points: state.points + 1
    }));
  };

  render() {
    console.log("--- render");

    const { points } = this.state;
    console.log("points", points);

    return (
      <React.Fragment>
        <h1>Points: {points}</h1>
        <button onClick={this.handleAdd}>ADD</button>
      </React.Fragment>
    );
  }
}

export default Point;