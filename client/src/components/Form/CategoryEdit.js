import React from 'react';

const CategoryEdit = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Edit
        </button>
      </form>
    </>
  );
};

export default CategoryEdit;
