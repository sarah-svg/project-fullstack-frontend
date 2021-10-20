/* eslint-disable max-len */
/* eslint-disable no-console */

import React, { Component } from 'react';
import {
  deleteMap,
  findMapById,
  getMap,
  postMap,
  updateMap
} from '../../utlis';

import Crud from './Crud';
import Result from './Result';

export default class Map extends Component {
    state = {
      image: '',
      locations: '',
      method: '',
      response: {},
      id: ''
    };
  handleChange = ({ target }) => {
   
    console.log(target.value.replace('C:\\fakepath\\', ''));
    this.setState({ [target.name]: target.value });
  }
    componentDidMount = async () => {
      await getMap().then(response => this.setState({ response }));
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { image, locations, method, id } = this.state;
  
      if(method === 'post') {
        postMap(image, locations)
          .then(res => this.setState({
            image: res.image,
            location: res.locations,
            response: res
          }));
      }
      else if(method === 'get') {
        getMap().then(response => this.setState({ response }));
      } else if(method === 'find') {
        findMapById(id).then(response => this.setState({ response }));
      } else if(method === 'delete') {
        deleteMap(id).then(response => this.setState({ response }));
      } else if(method === 'put') {
        updateMap(id, image, locations)
          .then(response => this.setState({ response }));
      }
    }
    render() {
      const { image,
        locations,
        response,
        method } = this.state;
  
      return (
        <div>
          <Crud
            image={image}
            locations={locations}
            method={method}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
          <Result response={response}/>
        </div>
      );
    }
}
