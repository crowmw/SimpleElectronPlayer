require('../public/less/main.less');
require('../public/css/globals.css');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container';

class App extends Component {
  render() { 
    return(
      <AppContainer />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
