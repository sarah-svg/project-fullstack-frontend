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
// import Result from './Result';
export default class Map extends Component {
    state = {
      image: '',
      locations: '',
      method: '',
      response: {},
      id: ''
    };
    handleChange = ({ target }) => {
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
            name: res.name,
            type: res.type,
            characteristic: res.characteristic,
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
      console.log(response);
      return (
        <div>
          <Crud
            image={image}
            locations={locations}
            method={method}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
          {/* <MultRes response= {response}/> */}
          {/* <div className="strainList">
            {response.map((item, i) => {
              return <ResOne key={i} image={item.image}
                location={item.locations} />;
            })}
          </div> */}
        
          {/* <Result response={response}/> */}
        </div>
      );
    }
}
