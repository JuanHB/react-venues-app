import { createApiUrl } from 'src/utils/createApiUrl';

const
  env = process.env,
  apiUrl = env.REACT_APP_API_URL,
  version = env.REACT_APP_API_VERSION,
  client_id = env.REACT_APP_API_CLIENT_ID,
  client_secret = env.REACT_APP_API_CLIENT_SECRET;

const apiUrlMatcher = [apiUrl, version, client_id, client_secret];
const apiUrlNullValue = '';
const apiUrlDefinedValue = '/venues/explore';
const finalUrlExpected = [
  apiUrl, apiUrlDefinedValue,
  '?v=', version,
  '&client_id=', client_id,
  '&client_secret=', client_secret
].join('');

describe('Renders apiUrlMatcher util', () => {

  it('with null value', () => {
    const url = createApiUrl(apiUrlNullValue);
    expect(url).toEqual(null);
  });

  it('with defined value', () => {
    const url = createApiUrl(apiUrlDefinedValue);
    expect(url).toContain(finalUrlExpected);
  });

});