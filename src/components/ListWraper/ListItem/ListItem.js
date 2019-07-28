import React from 'react';
//import PropTypes from 'prop-types';

const ListItem = ({id, name, surname, location, age}) => (
  <tr dataRowToRemove={id}>
    <td>
      {name}
    </td>
    <td>
      {surname}
    </td>
    <td>
      {location}
    </td>
    <td>
      {age}
    </td>
    <td className="ListWraper__td ListWraper__td--remove">
      <button className="btn btn-danger btn-sm" dataRowRemove={id}>X</button>
    </td>
  </tr>
 );

export default ListItem;