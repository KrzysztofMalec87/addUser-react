import React from 'react';

class Form extends React.Component {

  submitFn = ( event ) => {
    event.preventDefault();

    event.target.reset();  
  }

  render(){
    return (
      <form autoComplete="off" onSubmit={this.submitFn}>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <input type="text" className="form-control" />
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
