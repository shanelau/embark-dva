import React from 'react';
import { connect } from 'dva';
import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import Promise from 'bluebird';
import styles from './IndexPage.css';


let web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

const getBlock = Promise.promisify(web3.eth.getBlock);


function cb(error, result) {
  if (!error) {
    console.log(result);
  } else { console.error(error); }
}
function Web3Page() {
  getBlock('0x0e').then((data) => {
    console.log(data);
  });
  const coinbase = web3.eth.coinbase;
  const balance = web3.eth.getBalance(coinbase);
  console.log(new BigNumber(balance).toString());
  web3.eth.getBalance('0xaf95945c40452aed37bd627e98a9f15e3f93efca', 'latest', cb);

  const eth = web3.eth;
  const shh = web3.shh;
  const appName = 'My silly app!';
  const myName = 'Gav Would';
  const myIdentity = shh.newIdentity();

  shh.post({
    from: myIdentity,
    topics: [web3.fromAscii(appName)],
    payload: [web3.fromAscii(myName), web3.fromAscii('What is your name?')],
    ttl: 100,
    priority: 1000,
  });

  const replyWatch = shh.watch({
    topics: [web3.fromAscii(appName), myIdentity],
    to: myIdentity,
  });
// could be "topic": [ web3.fromAscii(appName), null ] if we wanted to filter all such
// messages for this app, but we'd be unable to read the contents.

  replyWatch.arrived((m) => {
	// new message m
    console.log(`Reply from ${web3.toAscii(m.payload)} whose address is ${m.from}`);
  });

  const broadcastWatch = shh.watch({ topic: [web3.fromAscii(appName)] });
  broadcastWatch.arrived((m) => {
    if (m.from !== myIdentity) {
    // new message m: someone's asking for our name. Let's tell them.
      const broadcaster = web3.toAscii(m.payload).substr(0, 32);
      console.log(`Broadcast from ${broadcaster}; replying to tell them our name.`);
      shh.post({
        from: eth.key,
        to: m.from,
        topics: [eth.fromAscii(appName), m.from],
        payload: [eth.fromAscii(myName)],
        ttl: 2,
        priority: 500,
      });
    }
  });

  return (
    <div className={styles.normal}>
      {/* <image src={this.state.img_src} />*/}

    </div>
  );
}

Web3Page.propTypes = {
};

export default connect()(Web3Page);
