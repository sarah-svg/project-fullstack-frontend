/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Crud({ onSubmit, onChange, image, locations, id, method }) {
  return (
    <div>
      <form encType="multipart/form-data" action="/" onSubmit={onSubmit}>
        <title>Map</title>
        <h1>Please select one of
                    the options to add, update, or get all of you maps</h1>
        <div>
          <input
            id="post"
            type="radio" 
            name="method" 
            placeholder="Enter post" 
            value="post"
            checked={method === 'post'}
            onChange={onChange}
          />
          <label htmlFor="post">Add a map to your database</label>
          <input
            type="file" placeholder=" add new map image"
            name="image" value={image} onChange={onChange}
          />
          <input
            type="text" placeholder=" add new map locations"
            name="location" value={locations} onChange={onChange}         
          />
        </div>
        <div>
          <input 
            id="get"
            type="radio" 
            name="method" 
            value="get" 
            checked={method === 'get'}
            onChange={onChange} />
          <label htmlFor="get">Get all Maps</label>
        </div>
        <div>
          <input 
            id="find"
            type="radio" 
            name="method" 
            value="find"
            checked={method === 'find'}
            onChange={onChange} />
          <label htmlFor="find">Find Map by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Map" 
            name="id"
            value={id}
            onChange={onChange} />
        </div>
              
        <div>
          <input 
            id="delete"
            type="radio" 
            name="method" 
            value="delete"
            checked={method === 'delete'}
            onChange={onChange} />
          <label htmlFor="delete">Delete Map by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Map" 
            name="id"
            value={id}
            onChange={onChange} />
        </div>
        <div>
          <input 
            id="put"
            type="radio" 
            name="method" 
            value="put"
            checked={method === 'put'}
            onChange={onChange} />
          <label htmlFor="put">Update map by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Map" 
            name="id"
            value={id}
            onChange={onChange} />

          <br />
          <input 
            type="text" 
            placeholder="Update image" 
            name="image"
            value={image}
            onChange={onChange} />
  
          <input 
            type="text" 
            placeholder="{1,2,3}" 
            name="locations"
            value={locations}
            onChange={onChange} />
  
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

Crud.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  image: PropTypes.string,
  locations: PropTypes.string,
  method: PropTypes.string,
  id: PropTypes.string
};

export default Crud;

