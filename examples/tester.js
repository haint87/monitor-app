const request = require('request');

const axios = require('axios');

const port = 443;

// const requestUrl = `http://localhost:${port}/return-status/`;


const requestUrl = 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber';

const interval = 100;

let i = 0;
const makeDummyCall = () => setTimeout(() => {
  const code = 200 + Math.random() * 399;

  axios.get(`${requestUrl}`).then(result => {
    console.log(`${++i} -> ${parseInt(result.data.result, 16)}`)
  });
  //

  makeDummyCall();
}, interval);

makeDummyCall();
