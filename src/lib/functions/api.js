const axios = require('axios').default;

const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com';

/**
 *Custom axios instance we are creating.
 *
 *Origin is needed to allow cors anywhere to work
 */
const api = axios.create({
  headers: {
    Origin: null,
  },
});

/**
 * this add cors anywhere to any request made, thereby preventing any cors error
 * @param url is the the endpoint we are calling
 */
const corsedUrl = (url) => `${CORS_ANYWHERE_URL}/${url}`;

module.exports = {
  api,
  corsedUrl,
  CORS_ANYWHERE_URL,
};
