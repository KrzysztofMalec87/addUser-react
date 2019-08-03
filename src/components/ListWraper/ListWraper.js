import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';

class ListWrapper extends Component {
 
  render(){
    const { header, users } = this.props.items;
    
    return (
      <table className="table table-striped table-bordered list-wraper">
        <thead className="table-dark">
          {header.map(item => {
            const { id } = item; 

            return (
              <ListItem key={id} {...item} />
            )
          }
        )}
        </thead>
        <tbody>
        {users.map(item => {
            const { id } = item; 

            return (
              <ListItem key={id} {...item} state={this.props.items} changeState={this.props.changeState} />
            )
          }
        )}
        </tbody>
      </table>
    );
  }
};


export default ListWrapper;