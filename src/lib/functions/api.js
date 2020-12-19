const CORS_ANYWHERE_URL = "https://free-cors.herokuapp.com";

/**
 * this add cors anywhere to any request made, thereby preventing any cors error
 * @param url is the the endpoint we are calling
 */
const corsedUrl = (url) => `${CORS_ANYWHERE_URL}/${url}`;

module.exports = {
  corsedUrl,
  CORS_ANYWHERE_URL,
};
