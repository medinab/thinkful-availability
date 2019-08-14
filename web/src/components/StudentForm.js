import React from 'react';

const StudentForm = (props) => {
    return (
        <form id="name-form" className="col-md-6">
          <div className="form-group">
            <label htmlFor="name-field">Your Name</label>
            <input type="text" id="name-field" className="form-control" onChange={e => props.onNameChange(e)} />
          </div>
        </form>
    )
}

export default StudentForm;
