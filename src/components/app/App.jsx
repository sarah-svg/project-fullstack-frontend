import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import MultRes from './Mult-Res';

import Map from './Map';
// import Image from './Image';
// import UHH from './UHH';
// import AddMapp from '../AddMapp';




export default function App() {
  return <>
    <Link to="/map">Link to add your map image and burn pile sizes</Link>

    <br></br>

    <Link to="/">Home Page</Link>

    <br></br>
    <Link to="/all">Get all of your maps</Link>
    <Link to="/image">Seeing if this image hits my database</Link>
    <Switch>
      <Route exact path="/map" component={Map}/>
      <Route exact path="/all" component={MultRes} />
    </Switch>

  </>;
}
