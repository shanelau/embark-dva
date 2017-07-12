
window.onload = function () {

  SimpleStorage.set(100);
  SimpleStorage.get().then(function (value) { console.log(value.toNumber()) });
  SimpleStorage.storedData().then(function (value) { console.log(value.toNumber()) });

  SimpleStorage.set(200);
  SimpleStorage.get().then(function (value) { console.log(value.toNumber()) });


//   // ipfs
  EmbarkJS.Storage.setProvider('ipfs', {
    server: '121.196.203.34', port: '5001' });

  EmbarkJS.Storage.saveText("hello world").then(function (hash) {
    EmbarkJS.Storage.get(hash).then(function (content) {
      console.log(content);
    });
  });

//   $("#upload").on('click', function (e) {
//     EmbarkJS.Storage.uploadFile($("#image")).then(function(hash) {
//         let url = EmbarkJS.Storage.getUrl(hash);
//         console.log(url);
//     });
//   })
EmbarkJS.Messages.setProvider('orbit', {server: 'localhost', port: 5001})

  // EmbarkJS.Messages.setProvider('whisper', {server: '121.196.203.34', port: 5001})
  EmbarkJS.Messages.listenTo({topic: ["topic1", "topic2"]}).then(function(message) { console.log("received: " + message); })
  EmbarkJS.Messages.sendMessage({topic: "topic1", data: 'hello world'})

};
