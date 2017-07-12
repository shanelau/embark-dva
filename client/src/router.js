import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import Web3Page from './routes/web3';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      {/* <Route path="/web3" component={Web3Page} />*/}
    </Router>
  );
}

export default RouterConfig;
