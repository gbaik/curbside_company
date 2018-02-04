import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './Search.js';
import Table from './Table.js';

class Dashboard extends React.Component{
  constructor(props) { 
    super(props);    
  
    this.state = {
      yubiKey: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      yubiKey: event.target.value
    })
  }

  handleSubmit() {
    const { yubiKey } = this.state;
    console.log('sdfg');
    axios.post('/search')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      throw err;
    });

    // $.ajax({
    //   url: '/search',
    //   data: yubikey,
    //   method: 'GET',
    //   success: function (data) {
    //     console.log('hello', data);
    //   }
    // });
  }

  render() {
    return (
      <div className="ui grid">
        <div className="two column sixteen width">
          <div className="column ten width">
            <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          </div>
          <div className="column">
            <div className="ui large header"> Truck #123: </div>
          </div>
              <Table />
          </div>
      </div>
    )
  }
}

export default Dashboard;
