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
    server: 'localhost', port: '5001' });

  EmbarkJS.Storage.saveText('hello world').then((hash) => {
    EmbarkJS.Storage.get(hash).then((content) => {
      console.log(content);
    });
  });

  EmbarkJS.Messages.setProvider('whisper', { server: 'localhost', port: 5001 });
  EmbarkJS.Messages.listenTo({ topic: ['topic1', 'topic2'] }).then((message) => { console.log(`received: ${message}`); });
  EmbarkJS.Messages.sendMessage({ topic: 'topic1', data: 'hello world' });


// 5. Start
  app.start('#root');
};

