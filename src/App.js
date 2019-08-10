import React, { Component } from 'react';
import ListWrapper from './components/ListWraper/ListWraper';
import UserData from './data/userData';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    items: UserData(),
  };

  changeState = newState => {
    this.setState({
      items: newState,
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        <ListWrapper changeState={this.changeState} items={items} />
        <Form changeState={this.changeState} state={items} />
      </div>
    );
  }
}

export default App;
