## embark with react

### install
```
$ npm -g install embark

# If you plan to use the simulator instead of a real ethereum node.
$ npm -g install ethereumjs-testrpc
```
### get start
1. eth test env: `embark simulator`
2. ipfs
    ```
    nohup ipfs daemon --enable-pubsub-experiment > log/out.log 2> log/err.log &
    ```
3. create contract `app/contracts`
4. build web3, contract env by `npm run embark_build`
5. dev your client dir.



### 技术点
1. ipfs 文件系统
2. 以太坊
3. web3.js
