pragma solidity ^0.4.7;
contract SimpleStorage {
  uint public storedData;

  function SimpleStorage(uint initialValue) {
    storedData = initialValue;
  }

  function set(uint x) {
    storedData = x * 100;
  }
  function get() constant returns (uint retVal) {
    return storedData;
  }
}