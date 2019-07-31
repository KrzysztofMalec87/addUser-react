import React, { Component } from 'react';

class Form extends Component {

  handleSubmitForm = event => {
    event.preventDefault();

    event.target.reset();  
  }

  render(){
    return (
      <form autoComplete="off" onSubmit={this.handleSubmitForm}>
        <div className="row">
          <div className="col">
            <input className="form-control" type="text" />
          </div>
          <div className="col">
            <input className="form-control" type="text" />
          </div>
          <div className="col">
            <input className="form-control" type="text" />
          </div>
          <div className="col">
            <input className="form-control" type="text" />
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
