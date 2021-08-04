import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className="widget-header--title"> Your options: </h3>
      <button className="button--link" onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
    {
      props.options.map((option, idx) => (
        <Option
          key={option}
          optionText={option}
          count={idx + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
