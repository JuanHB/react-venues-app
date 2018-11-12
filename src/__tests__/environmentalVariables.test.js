
const env = process.env;
const foursquareApiUrl = 'https://api.foursquare.com/v2';
const foursquareApiUrlVersion = '20181101';
const foursquareTokensLength = 48;

describe('environmental variables', () => {

  it('will contain process.env variables', () => {
    // foursquare API url
    expect(env.REACT_APP_API_URL).toBeDefined();
    expect(env.REACT_APP_API_URL).not.toBeNull();
    expect(env.REACT_APP_API_URL).toBe(foursquareApiUrl);

    // API url version
    expect(env.REACT_APP_API_VERSION).toBeDefined();
    expect(env.REACT_APP_API_VERSION).not.toBeNull();
    expect(env.REACT_APP_API_VERSION).toBe(foursquareApiUrlVersion);

    // API APP Client ID
    expect(env.REACT_APP_API_CLIENT_ID).toBeDefined();
    expect(env.REACT_APP_API_CLIENT_ID).not.toBeNull();
    expect(env.REACT_APP_API_CLIENT_ID).toHaveLength(foursquareTokensLength);

    // API APP Client Secret
    expect(env.REACT_APP_API_CLIENT_SECRET).toBeDefined();
    expect(env.REACT_APP_API_CLIENT_SECRET).not.toBeNull();
    expect(env.REACT_APP_API_CLIENT_SECRET).toHaveLength(foursquareTokensLength);

  });
});