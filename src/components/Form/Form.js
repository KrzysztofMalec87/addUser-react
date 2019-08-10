import React, { Component } from 'react';

class Form extends Component {
  submitForm = event => {
    event.preventDefault();

    const { header, users } = this.props.state;
    const form = event.target;
    const formInputName = form.name.value;
    const formInputSurname = form.surname.value;
    const formInputLocation = form.location.value;
    const formInputAge = form.age.value;
    const randomId = Math.floor(Math.random() * 10000);

    const newState = {
      header: [...header],
      users: [
        ...users,
        {
          id: `${randomId}`,
          name: `${formInputName}`,
          surname: `${formInputSurname}`,
          location: `${formInputLocation}`,
          age: `${formInputAge}`,
        },
      ],
    };

    this.props.changeState(newState);

    form.reset();
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.submitForm}>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              minLength="3"
              name="name"
              required
              type="text"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              minLength="3"
              name="surname"
              required
              type="text"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              minLength="3"
              name="location"
              required
              type="text"
            />
          </div>
          <div className="col">
            <input className="form-control" name="age" required type="number" />
          </div>
          <div className="col">
            <button className="btn btn-info w-100">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
