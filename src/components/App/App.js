import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';
import Header from '../elements/Header/Header'
import Staff from '../Pages/Staff';
import Login from '../Auth/Login';
import Home from '../Home/Home'



function onAuthRequired({history}){
  history.push('/Login');
}

class App extends React.Component {
 render() {
  return(
    <Router>
      <Security issuer='https://dev-835455.oktapreview.com/oauth2/default'
                client_id='0oahdettg7K7NMgxw0h7'
                redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
    <div>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <SecureRoute path="/staff" exact={true} component={Staff} />
      <Route path='/login' render={() => <Login baseUrl='https://dev-835455.oktapreview.com' />} />
      <Route path='/implicit/callback' component={ImplicitCallback} />
    </div>
  </Security>
    </Router>
  )
}
}

export default App;
