export const createMapsUrl = address => (
  address ? `https://www.google.com/maps/search/?api=1&query=${address}` : null
);
