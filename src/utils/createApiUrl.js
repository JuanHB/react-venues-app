const createApiUrl = endpoint => {

  const
    apiUrl = process.env.REACT_APP_API_URL,
    version = process.env.REACT_APP_API_VERSION,
    client_id = process.env.REACT_APP_API_CLIENT_ID,
    client_secret = process.env.REACT_APP_API_CLIENT_SECRET;

  return [
    apiUrl, endpoint,
    '?v=', version,
    '&client_id=', client_id,
    '&client_secret=', client_secret
  ].join('');

};
export default createApiUrl;