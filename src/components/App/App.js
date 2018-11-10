import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../elements/Header/Header'
import Staff from '../Pages/Staff';
import Home from '../Home/Home'


class App extends React.Component {
 render() {
  return(
    <Router>
    <div>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/staff" exact={true} component={Staff} />
    </div>
    </Router>
  )
}
}

export default App;
