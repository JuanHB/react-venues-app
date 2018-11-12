/**
 * Composes the API Endpoint URL to call.
 * Uses the provided endpoint and the .env variables
 * @param endpoint {string} the endpoint to compose the final url around
 * @returns {string} the composed final url
 */
export const createApiUrl = endpoint => {

  // accessing the .env variables
  const env = process.env;
  const
    apiUrl = env.REACT_APP_API_URL,
    version = env.REACT_APP_API_VERSION,
    client_id = env.REACT_APP_API_CLIENT_ID,
    client_secret = env.REACT_APP_API_CLIENT_SECRET;

  // creating and returning the final url string
  return endpoint
    ? [
      apiUrl, endpoint,
      '?v=', version,
      '&client_id=', client_id,
      '&client_secret=', client_secret
    ].join('')
    : null;

};