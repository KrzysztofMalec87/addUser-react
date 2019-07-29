import React, { Component } from 'react';
import ListWrapper from './components/ListWraper/ListWraper';
import UserData from './data/userData';
import Form from './components/Form/Form';


class App extends Component {
  state = {
    items: UserData(),
  };
  
  render(){
    const {items} = this.state;

    return (
      <div className="container">
        <ListWrapper items={items} />
        <Form />
      </div>
    );
  }
}

export default App;
