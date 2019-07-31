import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({id, name, surname, location, age}) => (
  <tr className="list-wraper__table-row" dataRowToRemove={id}>
    <td className="list-wraper__table-cell">
      {name}
    </td>
    <td className="list-wraper__table-cell">
      {surname}
    </td>
    <td className="list-wraper__table-cell">
      {location}
    </td>
    <td className="list-wraper__table-cell">
      {age}
    </td>
    <td className="list-wraper__table-cell list-wraper__table-cell--remove">
      <button className="btn btn-danger btn-sm list-wraper__remove-button" dataRowRemove={id}>X</button>
    </td>
  </tr>
 );


 ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default ListItem;