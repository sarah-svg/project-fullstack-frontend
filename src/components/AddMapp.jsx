import React, { useEffect, useState } from 'react';
import { getMap, postMap } from '../utlis';

import Result from './app/Result';


function AddMapp() {
    const [image, setImg] = useState('');
    const [locations, setLocations] = useState('');
  const [response, setResponce] = useState('');

  useEffect(() => {
    getMap().then(res => {
      setResponce(res);
    });
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e, 'hooooooooopplokpokjoj');
    const newMap = {
      image: e.target[0].value,
      locations: e.target[1].value,
      
    };
      setImg(e.target[0].value);
      setLocations(e.target[1].value)
    await postMap(newMap);
    this.props.history.push('all');

  };

    
  console.log(response, 'hekooo');
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post">Add a map to your database</label>
          <input
            type="text" placeholder=" add new map image"
            name="image" value={image} 
          />
          <input
            type="text" placeholder=" add new map locations"
            name="location"
            value={locations}
          />
        </div>
    
        <button>Submit</button>
      </form>
      <Result response={response}/>   
    </div>
  );
}

export default AddMapp;
