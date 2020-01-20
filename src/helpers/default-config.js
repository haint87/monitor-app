module.exports = {
  title: 'Express Status',
  theme: 'default.css',
  path: '/status',
  socketPath: '/socket.io',
  spans: [
    {
      interval: 1,
      retention: 60,
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
  ],
  port: null,
  websocket: null,
  iframe: false,
  chartVisibility: {
    cpu: false,
    mem: false,
    load: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  ignoreStartsWith: '/admin',
  healthChecks: [
    {
      networkType: 'ListChain',
      name: 'List Chain ezDeFi',
      protocol: 'https',
      host: 'merchant-api.ezdefi.com',
      port: 443,
      path: '/api/chain/list',
      refUrl: 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=1UB3TKDI59UKA9XFE5FXJIP3YK8WTGDR7K',
      headers: {},
    },
    {
      networkType: 'NTY',
      name: 'Nexty 1',
      protocol: 'http',
      host: '207.180.228.147',
      port: 8545,
      path: '',
      refUrl: 'https://explorer.nexty.io/api?module=block&action=eth_block_number',
      headers: {},
    },
    {
      networkType: 'NTY',
      name: 'Nexty 2',
      protocol: 'http',
      host: '178.238.233.73',
      port: 8545,
      path: '',
      refUrl: 'https://explorer.nexty.io/api?module=block&action=eth_block_number',
      headers: {},
    },
    {
      networkType: 'TRX',
      name: 'Tron 1',
      protocol: 'https',
      host: 'api.trongrid.io',
      port: 443,
      path: '',
      refUrl: '',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'BTC 1',
      protocol: 'http',
      host: '198.27.82.12',
      port: 18332,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/btc/mainnet/info',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'BTC 2',
      protocol: 'http',
      host: '193.200.241.132',
      port: 18332,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/btc/mainnet/info',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'Bitcoin Cash 1',
      protocol: 'http',
      host: '198.27.82.12',
      port: 38332,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/bch/mainnet/info',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'Bitcoin Cash 2',
      protocol: 'http',
      host: '193.200.241.132',
      port: 38332,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/bch/mainnet/info',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'Dash 1',
      protocol: 'http',
      host: '193.200.241.132',
      port: 19998,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/dash/mainnet/info',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'Dash 2',
      protocol: 'http',
      host: '193.200.241.132',
      port: 19998,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/dash/mainnet/info',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'Litecoin 1',
      protocol: 'http',
      host: '198.27.82.12',
      port: 19332,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/ltc/mainnet/info',
      headers: {},
    },
    {
      networkType: 'BTC',
      name: 'Litecoin 2',
      protocol: 'http',
      host: '193.200.241.132',
      port: 19332,
      path: '/rest/chaininfo.json',
      refUrl: 'https://blockexplorer.one/ajax/ltc/mainnet/info',
      headers: {},
    },
    {
      networkType: 'ETH',
      name: 'Ethereum 1',
      protocol: 'http',
      host: '198.27.82.12',
      port: 8545,
      path: '',
      refUrl: 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=1UB3TKDI59UKA9XFE5FXJIP3YK8WTGDR7K',
      headers: {},
    },
    {
      networkType: 'ETH',
      name: 'Ethereum 2',
      protocol: 'http',
      host: '193.200.241.132',
      port: 8545,
      path: '',
      refUrl: 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=1UB3TKDI59UKA9XFE5FXJIP3YK8WTGDR7K',
      headers: {},
    },
    {
      networkType: 'Explorer',
      name: 'Explorer 1',
      protocol: 'http',
      host: '193.200.241.132',
      port: 8545,
      path: '',
      headers: {},
    },
    {
      networkType: 'Explorer',
      name: 'Explorer 2',
      protocol: 'http',
      host: '178.238.233.73',
      port: 4000,
      path: '',
      headers: {},
    },
    {
      networkType: 'Stats',
      name: 'Stats',
      protocol: 'https',
      host: 'stats.nexty.io',
      port: 443,
      path: '',
      headers: {},
    },
    {
      networkType: 'Bot',
      name: 'Bot 1',
      protocol: 'http',
      host: 'localhost',
      port: 3000,
      path: '/checkstatus',
      headers: {},
    },
    {
      networkType: 'Bot',
      name: 'Bot 2',
      protocol: 'http',
      host: 'localhost',
      port: 3000,
      path: '/checkstatus',
      headers: {},
    },
    {
      networkType: 'Backend',
      name: 'Backend ezdefi',
      protocol: 'http',
      host: '94.23.9.194',
      port: 3000,
      path: '/api/token/show/5e144b5d1565572569b8868e',
      headers: {},
    },
    {
      networkType: 'Backend',
      name: 'Proxy ezDeFi',
      protocol: 'https',
      host: 'merchant-api.ezdefi.com',
      port: 443,
      path: '/api/token/show/5e144b5d1565572569b8868e',
      headers: {},
    },
  ]
};
