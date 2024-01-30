export const getLocation = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const endpoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error('Failed to fetch location data');
      }

      const locationData = await response.json();

      // Check if currency code is available
      const countryCode = locationData.countryCode;

      if (!countryCode) {
        throw new Error('Country code not available');
      }

      // Fetch currency data using the country code
      const currencyEndpoint = `https://open.er-api.com/v6/latest/${countryCode}`;
      const currencyResponse = await fetch(currencyEndpoint);

      if (!currencyResponse.ok) {
        throw new Error('Failed to fetch currency data');
      }

      const currencyData = await currencyResponse.json();

      // Check if the currency data is available
      if (currencyData.error === 'unsupported-code') {
        throw new Error('Unsupported currency code');
      }

      resolve({ location: locationData, currency: currencyData });
    } catch (error) {
      console.error(error);
      reject(null);
    }
  });
};

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};
