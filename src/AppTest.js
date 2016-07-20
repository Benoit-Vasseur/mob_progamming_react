import React from 'react';

const CreateClassComponent = React.createClass({
  render: function() {
    return <div>CreateClassComponent</div>;
  }
});

const CreateClassComponentWithProps = React.createClass({
  render: function() {
    return <div>CreateClassComponent - prop name : {this.props.name}</div>;
  }
});

function FunctionComponent() {
  return (
    <div>
      FunctionComponent
    </div>
  )
}

function FunctionComponentWithProps({ label, price }) {
  return (
    <div>
      FunctionComponentWithProps - label = {label} - prix = {price}
    </div>
  )
}

const CreateClassComponentWithState = React.createClass({
  getInitialState: function() {
    return { number: 42 };
  },
  increment: function() {
    this.setState({number: this.state.number + 1})
  },
  render: function() {
    return <div>
      CreateClassComponent - number : {this.state.number}
      <button onClick={this.increment}>Increment</button>
    </div>;
  }
});

class ES6ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: props.initialNumber};
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({number: this.state.number + 1})
  }

  render() {
    return <div>
      ES6ClassComponent - name = {this.props.name}, number = {this.state.number}
      <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const CreateClassComponentLifeCycle = React.createClass({
  componentWillMount: function() {
    console.info('componentWillMount');
  },
  componentDidMount: function() {
    console.info('componentDidMount');
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    // on peut retourner false pour éviter un render/update du composant
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.info('componentWillUpdate');
  },
  componentDidUpdate: function(prevProps, prevState) {
    console.info('componentDidUpdate');
  },
  componentWillUnmount: function() {
    console.info('componentWillUnmount');
  },
  render: function() {
    return <div>
      CreateClassComponentLifeCycle
    </div>;
  }
});


export default function AppTest({label}) {
  return (
    <div>
      <h2> App label : {label} </h2>
      <CreateClassComponent />
      <hr />
      <CreateClassComponentWithProps name="Toto" />
      <hr />
      <FunctionComponent />
      <hr />
      <FunctionComponentWithProps label="Coucou" price="34.42" />
      <hr />
      <CreateClassComponentWithState />
      <hr />
      <ES6ClassComponent name="John" initialNumber={1} />
      <hr />
      <CreateClassComponentLifeCycle />
    </div>
  )
}
