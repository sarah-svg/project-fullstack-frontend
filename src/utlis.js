/* eslint-disable no-console */
import fetch from 'node-fetch';

// const URL = 'https://localhost7899/api/v1/dogs';
const URL = 'https://whispering-caverns-94096.herokuapp.com/api/v1/maps';


export const postMap = (image, locations) => {
  const data = { image, locations };
    
  return fetch(`${URL}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
};

export const getMap = () => {
  return fetch(`${URL}`)
    .then(res => res.json());
};

export const findMapById = (id) => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json());
};

export const deleteMap = (id) => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }    
  }).then(res => res.json());
};

export const updateMap = async (id, image, locations) => {
  const data = { image, locations };
  //   console.log(id, name, type, characteristic);

  return await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const imageUploader = async () => {
  fetch(`${URL}/image-upload`, {
    method: 'POST',
    body: 'formData'
  })
    .then(res => {
      if(!res.ok) {
        throw res;
      }
      return res.json();
    }).catch(err => {
      err.json().then(e => {
        console.error(e);
      });
    });
};


