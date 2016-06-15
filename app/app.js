require('../public/less/main.less');
require('../public/css/globals.css');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';
import Progress from './components/progress.component';
import Footer from './components/footer.component';

class App extends Component {
  render() {
    return(
      <div>
        <Search />
        <Details title={'Track title'} />
        <Player />
        <Progress
          position={'0.2'}
          elapsed={'00:00'}
          total={'0:40'}/>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
