import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Search = () => (
  <div className="ui search">
    <div className="ui icon input">
      <input className="prompt" type="text" placeholder="Search..."/>
      <i className="search icon"></i>
    </div>
    <div className="results"></div>
  </div>
)

const Table = () => (
  <table class="ui celled table"> 
    <thead> 
      <tr> 
        <th>Pick-up Location:</th> 
        <th>ETA:</th> 
      </tr> 
    </thead>
    <tbody>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
      </tr> 
      <tr> 
        <td>Cell</td> 
        <td>Cell</td> 
      </tr> 
      <tr> 
       <td>Cell</td> 
       <td>Cell</td> 
      </tr> 
    </tbody> 
  </table>
)

class Dashboard extends React.Component{
  constructor(props) { 
    super(props);    
  }

  render() {
    return (
      <div className="ui grid">
        <div className="two column sixteen width">
          <div className="column ten width">
            <Search />
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
