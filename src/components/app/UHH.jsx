import React, { Component, useEffect, useState } from 'react';
import {
  deleteMap,
  findMapById,
  getMap,
  postMap,
  updateMap
} from '../../utlis';


import Result from './Result';
import axios from 'axios';


function UHH() {

  const [image, setImg] = useState('');
  const [locations, setLocations] = useState('');
  const [method, setMethod] = useState('');
  const [response, setResponce] = useState('');
  const [id, setId] = useState('');
  

  useEffect(() => {
    getMap().then(res => {
      setResponce(res);
    });
  }, []);  
      
  function handleSubmit(e) {
    e.preventDefault();
    // const { image, locations, method, id } = this.state;
      
    if(method === 'post') {
    //   setMethod('post');
      postMap(image, locations)
        .then((res) => {
          setImg(res.image);
          setLocations(res.locations);
          setResponce(res);
          // name: res.name,
          // type: res.type,
          // characteristic: res.characteristic,
          // response: res
        });
    }
    else if(method === 'get') {
    //   setMethod('get');
      getMap().then(response => {
        setResponce(response);
      });
    } else if(method === 'find') {
    //   setMethod('find');
      findMapById(id).then(response => {
        setResponce(response);
      });
    } else if(method === 'delete') {
    //   setMethod('delete');
      deleteMap(id).then(response => { setResponce(response); }
      );
    } else if(method === 'put') {
      setMethod('put');
      updateMap(id, image, locations)
        .then(response => {
          setId(response.id);
          setLocations(response.locations);
          setImg(response.image);
        });
    }
  }
      
  console.log(response);
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            method="post"
            checked={method === 'post'}
            onChange={(e) =>  setMethod(e.target.value)}
          />
          <label htmlFor="post">Add a map to your database</label>
          <input
            type="text" placeholder=" add new map image"
            name="image" value={image} onChange={(e) => setImg(e.target.value)}
          />
          <input
            type="text" placeholder=" add new map locations"
            name="location" value={locations}
            onChange={(e) => setLocations(e.target.value)}
          />
        </div>
        <div>
          <input 
            id="get"
            type="radio" 
            // name="" 
            value="get"
            method= "get"
            checked={method === 'get'}
            onChange={handleSubmit} />
          <label htmlFor="get">Get all Maps</label>
        </div>
        <div>
          <input 
            id="find"
            type="radio" 
            // name="method" 
            value="find"
            method="find"
            checked={method === 'find'}
            onChange={handleSubmit} />
          <label htmlFor="find">Find Map by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Map" 
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)} />
        </div>
              
        <div>
          <input 
            id="delete"
            method="delete"
            type="radio" 
            // name="method" 
            value="delete"
            checked={method === 'delete'}
            onChange={handleSubmit} />
          <label htmlFor="delete">Delete Map by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Map" 
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <input 
            id="put"
            type="radio" 
            // name="method"
            method="put"
            value="put"
            checked={method === 'put'}
            onChange={(e) => setResponce(e.target.value)} />
          <label htmlFor="put">Update map by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Map" 
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)} />

          <br />
          <input 
            type="text" 
            placeholder="Update image" 
            name="image"
            value={image}
            onChange={(e) => setImg(e.target.value)} />
  
          <input 
            type="text" 
            placeholder="{1,2,3}" 
            name="locations"
            value={locations}
            onChange={(e) => setLocations(e.target.value)} />
  
        </div>
        <button>Submit</button>
      </form>
      <Result response={response}/>
    </div>
  );
}


export default UHH;

