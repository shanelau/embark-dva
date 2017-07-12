import dva from 'dva';
import './index.css';

window.onload = function () {
  // 1. Initialize
  const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
  app.router(require('./router'));

  const SimpleStorage = window.SimpleStorage;

  SimpleStorage.set(100);
  SimpleStorage.get().then((value) => { console.log(value.toNumber()); });
  SimpleStorage.storedData().then((value) => { console.log(value.toNumber()); });

  SimpleStorage.set(200);
  SimpleStorage.get().then((value) => { console.log(value.toNumber()); });

  // ipfs
  EmbarkJS.Storage.setProvider('ipfs', {
    server: '121.196.203.34', port: '5001' });

  EmbarkJS.Storage.saveText('hello world').then((hash) => {
    EmbarkJS.Storage.get(hash).then((content) => {
      console.log(content);
    });
  });


// 5. Start
  app.start('#root');
};

