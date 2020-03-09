## Installation

```

$ npm i react-dropdown-simple --save

@import '~react-dropdown-simple/dist/main.css';

```

## Usage 

```

options = [ {name : 'text_1',value : 1}, {name : 'text_2',value : 2}, ...]

change = value => this.setState({ Your_State : value });

```

## Mount

```

<DropDown placeholder="Your_Placeholder" list={options} onSelect={this.change}></DropDown>

```

## Props

Prop | Type | Description
------------ | ------------- | -------------
list  (required) | object[] | List with the following keys:name, value.
onSelect  (required) | func | Selecting value
placeholder | string | Placeholder shown where there are no selected values


