//fetch data from API
export const getAllStarships = async () => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };
