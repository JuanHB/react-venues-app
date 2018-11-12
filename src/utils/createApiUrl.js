/**
 * Composes the API Endpoint URL to call.
 * Uses the provided endpoint and the .env variables
 * @param endpoint {string} the endpoint to compose the final url around
 * @returns {string} the composed final url
 */
const createApiUrl = endpoint => {

  // accessing the .env variables
  const
    apiUrl = process.env.REACT_APP_API_URL,
    version = process.env.REACT_APP_API_VERSION,
    client_id = process.env.REACT_APP_API_CLIENT_ID,
    client_secret = process.env.REACT_APP_API_CLIENT_SECRET;

  // creating and returning the final url string
  return [
    apiUrl, endpoint,
    '?v=', version,
    '&client_id=', client_id,
    '&client_secret=', client_secret
  ].join('');

};
export default createApiUrl;