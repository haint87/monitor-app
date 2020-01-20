/* eslint-disable camelcase */

'use strict';

const axios = require('axios');
const auth_id = 'MANMU3YWQ5YZQWNGQ0NT'
const auth_token = 'M2FiOTVkNzgxOWMyZWI2MjhmNjQ5MGI5MmU4ZjI5'

module.exports.urgent_call = async (call_from, call_to) => {
  axios.post(`https://api.plivo.com/v1/Account/${auth_id}/Call/`,
    {
      from: call_from,
      to: call_to,
      answer_url: 'https://s3.amazonaws.com/static.plivo.com/answer.xml',
    },
    {
      auth: {
        username: auth_id,
        password: auth_token
      }
    }
  )
    .then(response => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
