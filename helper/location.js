export const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const endpoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
            const response = await fetch(endpoint);
  
            if (response.ok) {
              const data = await response.json();
              resolve(data);
            } else {
              throw new Error('Failed to fetch data');
            }
          } catch (error) {
            console.error(error);
            reject(null);
          }
        },
        (error) => {
          console.error(error);
          reject(null);
        }
      );
    });
  };
  