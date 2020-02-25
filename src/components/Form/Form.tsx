import * as React from 'react';
// import ReactDOM from "react-dom";

import './styles.scss';

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  value: string
}

class Form extends React.Component<AppProps, AppState> {
  constructor(props: object) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <h2>{this.state.value}</h2>
      </form>
    );
  }
}


export default Form;

