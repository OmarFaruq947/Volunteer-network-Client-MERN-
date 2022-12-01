import React from 'react';

const AddEvent = () => {
    return (
        <div className="login">
    <div className="signin">
      <div className="form-section">
        <h6>Add Event</h6>
        <form >
          <input
            type="text"
            name="question"
            placeholder="Question"
            required
          />

          <input
            type="text-area"
            name="answer"
            placeholder="Answer"
            required
          />
          
          <input
            className="w-25 mx-auto btn btn-primary mt-2"
            type="submit"
            value="Add Faq"
          />
        </form>
      </div>
    </div>
  </div>
    );
};

export default AddEvent;