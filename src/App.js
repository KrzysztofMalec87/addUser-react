import React from 'react';
import ListWrapper from './components/ListWraper/ListWraper';
import UserData from './data/userData';


class App extends React.Component {
  state = {
    items: UserData(),
  };
  
  render(){
    return (
      <div className="container">
        <ListWrapper items={this.state.items} />
      </div>
    );
  }
}

export default App;
