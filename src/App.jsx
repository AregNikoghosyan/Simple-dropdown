import React, { Component } from 'react';
import DropDown from './components/Dropdown';

class App extends Component {

  componentDidMount() {

  }

  list = [
    {
      name: 'test',
      value: 1,
    },
    {
      name: 'asd',
      value: 2,
    },
    {
      name: 'qwe',
      value: 3,
    }
  ]

  change = value => this.setState({ selectedCategory: value });

  render() {

    return (
      <div>
        <DropDown placeholder="Choose" list={this.list} onSelect={this.change}></DropDown>
      </div>
    );
  }
}

export default App;

