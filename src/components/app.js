import React, { Component } from 'react';
import moment from "moment";
// all components are going to be nbested under the parent component here
export default class App extends Component {
  render() {
    return ( //html for display is going to go here
      <div className='app'>
        <h1>Josh Maurer's Portfolio</h1>
        <h2>React Project</h2>

        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    
      </div>
    );
  }
}
