import React, { Component } from 'react';


class ListItem extends Component {

  findindexKey = (array, id) => array.findIndex(object => object.id === id);

  removeRow = () => {
    const {
      id,
      state
    } = this.props;

    delete state.users[this.findindexKey(state.users, id)];

    state.users = state.users.filter(function () { return true; });

    this.props.changeState(state);
  }

  render() {
    const {
      name,
      surname,
      location,
      age
    } = this.props;


    return (
      <tr className="list-wraper__table-row">
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
          <button className="btn btn-danger btn-sm list-wraper__remove-button" onClick={this.removeRow}>X</button>
        </td>
      </tr>
    );
  }
}


export default ListItem;