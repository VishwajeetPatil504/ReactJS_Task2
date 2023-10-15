import React, { Component } from 'react';

class KeyPadComponent extends Component { 
  render() {
    const buttons = ['(', 'CE', ')', 'C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];
    return (
      <div className="button">
        {buttons.map((button, index) => (
          <button key={index} name={button} onClick={e => this.props.onClick(e.target.name)}>
            {button}
          </button>
        ))}
      </div>
    )
  }
}

export default KeyPadComponent;
