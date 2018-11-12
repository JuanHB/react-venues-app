import {createMapsUrl} from 'src/utils/createMapsUrl';

const mapsUrlMatcher = /https:\/\/www.google.com\/maps\/search\/\?api=1&query=/;
const mapsUrlQueryNullValue = '';
const mapsUrlQueryDefinedValue = 'New York';

describe('Renders createMapsUrl util', () => {

  it('with null value', () => {
    const url = createMapsUrl(mapsUrlQueryNullValue);
    expect(url).toEqual(null);
  });

  it('with defined value', () => {
    const url = createMapsUrl(mapsUrlQueryDefinedValue);
    expect(url).toMatch(mapsUrlMatcher);
  });

});