import React from 'react';
import ListItem from './ListItem/ListItem';

const ListWrapper = props => (
  <table className="table table-striped table-bordered ListWraper">
    <thead className="table-dark">
      {props.items.header.map(item => (
        <ListItem key={item.id} {...item} />
      ))}
    </thead>
    <tbody>
      {props.items.users.map(item => (
        <ListItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

export default ListWrapper;