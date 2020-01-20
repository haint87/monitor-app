'use strict';

const axios = require('axios');

function allSettled (promises) {
  const wrappedPromises = promises.map(p => Promise.resolve(p)
    .then(
      val => ({ state: 'fulfilled', value: val }),
      err => ({ state: 'rejected', reason: err })
    )
  );

  return Promise.all(wrappedPromises)
}

function mergerUrl (healthCheck) {
  let uri = `${healthCheck.protocol}://${healthCheck.host}`;

  if (healthCheck.port) {
    uri += `:${healthCheck.port}`;
  }

  uri += healthCheck.path;
  return uri;
}

const getBlock = async server => {
  const fullurl = mergerUrl(server);
  const blocks = []
  const block1 = 0
  let block2 = 0
  const reqData = { jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 }
  const response = null
  let responseRef = null

  switch (server.networkType) {
    case 'ETH':
      // response = await axios.post(fullurl, reqData)
      // block1 = parseInt(response.data.result, 16)

      responseRef = await getRequest(server.refUrl);
      // console.log(responseRef.data)
      block2 = parseInt(responseRef.data.result, 16);
      break;
    case 'NTY':
      // response = await axios.post(fullurl, reqData)
      // block1 = parseInt(response.data.result, 16)

      // responseRef = await axios.get(server.refUrl);
      // block2 = parseInt(responseRef.data.result, 16);
      break;
    case 'BTC':
      // try {
        // response = await axios.get(fullurl);
        // if (response) {
        //   block1 = parseInt(response.data.blocks, 16)
        // }
      //   responseRef = await axios.get(server.refUrl);
      //   if (responseRef) {
      //     block2 = parseInt(responseRef.data.height, 16);
      //   }
      // } catch (error) {
      //   // console.log(error)
      // }

      break;
    case 'TRX':
      // code block
      // responseRef = await axios.get('https://apilist.tronscan.org/api/block?limit=1');
      // console.log(responseRef.data);
      break;
    case 'ListChain':
      // code block
      break;
    case 'Explorer':
      // code block
      break;
    case 'Backend':
      // code block
      break;
    default:
    // code block
  }
  blocks.push({ block1, block2 })
  // console.log(blocks)
  return blocks
}

async function checkBlock (healthChecks) {
  const checkResults = [];

  healthChecks.forEach(async (_, index) => {
    const server = healthChecks[index];
    const fullurl = mergerUrl(server);
    const status = 'failed';

    getBlock(server).then(async blocks => {
      const data = {
        fullurl,
        name: server.name,
        path: server.path,
        status,
        time: Math.floor(Date.now() / 1000),
        backendBlockNumber: blocks.block1,
        currentBlock: blocks.block2
      }

      console.log(data);
      checkResults.push(data);
    });
  });

  return checkResults;
}

module.exports = async healthChecks => {
  const checkPromises = [];

  (healthChecks || []).forEach(healthCheck => {
    const uri = mergerUrl(healthCheck);

    checkPromises.push(axios.get(uri));
  });

  const checkResults = [];

  return allSettled(checkPromises)
    .then(results => {
      results.forEach(async (result, index) => {
        const server = healthChecks[index];

        const fullurl = mergerUrl(server);

        let status = 'failed';

        if (result.state === 'rejected') {
          status = 'failed';
        } else {
          status = 'ok';
        }

        checkResults.push({
          fullurl,
          name: healthChecks[index].name,
          path: healthChecks[index].path,
          status
        });
      });
      return checkResults;
    });
};

module.exports.pushData = async healthChecks => {
  await checkBlock(healthChecks).then(checkResults => {
    console.log(checkResults)
    return checkResults
  });
};


async function getRequest (url) {
  try {
    const response = await axios.get(url);

    return response
    // console.log(response);
  } catch (error) {
    // console.error(error);
  }
}
