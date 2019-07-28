import React from 'react';
import ListWrapper from './components/ListWraper/ListWraper';
import UserData from './data/userData';
import Form from './components/Form/Form';


class App extends React.Component {
  state = {
    items: UserData(),
  };
  
  render(){
    return (
      <div className="container">
        <ListWrapper items={this.state.items} />
        <Form />
      </div>
    );
  }
}

export default App;
