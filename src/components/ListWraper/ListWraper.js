import React from 'react';
import ListItem from './ListItem/ListItem';

const ListWrapper = ({ items }) => {
  const { header, users } = items;

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
            <ListItem key={id} {...item} />
          )
        }
      )}
      </tbody>
    </table>
  );
};

export default ListWrapper;