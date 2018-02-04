import React from 'react';

const Search = ({handleChange, handleSubmit}) => (
  <div className="ui search">
    <div className="ui icon input">
      <input className="prompt" type="text" placeholder="Search..." onChange={(event) => handleChange(event)}/>
      <button type="button" className="ui button" onClick={() => handleSubmit()}>Submit</button>
    </div>
    <div className="results"></div>
  </div>
)

export default Search;