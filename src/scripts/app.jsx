'use strict';

var React = require('react'),
    Module = require('./modules/Module.jsx');

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

React.render(
    <Module data={data} />,
    document.getElementById('content')
  );