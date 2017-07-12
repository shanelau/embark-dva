  // import React from 'react';
  // import ReactDOM from 'react-dom';

  // ReactDOM.render(
  //   <h1>Hello, world!</h1>,


  //   document.getElementById('root')
  // );

window.onload = function () {

  SimpleStorage.set(100);
  SimpleStorage.get().then(function (value) { console.log(value.toNumber()) });
  SimpleStorage.storedData().then(function (value) { console.log(value.toNumber()) });

  SimpleStorage.set(200);
  SimpleStorage.get().then(function (value) { console.log(value.toNumber()) });


//   // ipfs
//   EmbarkJS.Storage.setProvider('ipfs', {
//     server: '121.196.203.34', port: '5001' });

//   EmbarkJS.Storage.saveText("hello world").then(function (hash) {
//     EmbarkJS.Storage.get(hash).then(function (content) {
//       //console.log(content);
//     });
//   });

//   $("#upload").on('click', function (e) {
//     EmbarkJS.Storage.uploadFile($("#image")).then(function(hash) {
//         let url = EmbarkJS.Storage.getUrl(hash);
//         console.log(url);
//     });
//   })


// };
