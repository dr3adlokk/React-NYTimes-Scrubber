var React = require ('react')
var ReactDOM = require('react-dom')

//parent component 
var Main = require('./components.children/Main.jsx');


// Note that the Id is "app" which matches that of the "index.html" file


ReactDOM.render(<Main />, document.getElementById('app'));

