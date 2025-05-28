import useGlobalReducer from "./hooks/useGlobalReducer.jsx";

export const useActions = () => {
  const { store, dispatch } = useGlobalReducer();

  //   const getPeople = async () => {
  //     if (store.people.length > 0) {
  //       return store.people;
  //     }
  //     const response = await fetch(
  //       "https://www.swapi.tech/api/people/?expanded=true"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Fetch error: " + response.statusText);
  //     }
  //     const data = await response.json();
  //     dispatch({ type: "add_people", payload: { people: data.results } });
  //     return data.results;
  //   };

  const getElements = async (type) => {
    let elements = [];
    let page = 1;
    let maxPage = null;
    if (store[type].length > 0) {
      return store[type];
    }
    const response = await fetch(
      `https://www.swapi.tech/api/${type}?page=${page}&limit=10&expanded=true`
    );
    if (!response.ok) {
      throw new Error("Fetch error: " + response.statusText);
    }
    const data = await response.json();
    elements = data.results;
    maxPage = data.total_pages;
    while (page < maxPage) {
      page++;
      const nextResponse = await fetch(
        `https://www.swapi.tech/api/${type}?page=${page}&limit=10&expanded=true`
      );
      const nextData = await nextResponse.json();
      elements = elements.concat(nextData.results);
    }
    console.log(elements);
    if (type === "people") {
      dispatch({ type: "add_people", payload: { people: elements } });
    } else if (type === "planets") {
      dispatch({ type: "add_planets", payload: { planets: elements } });
    } else if (type === "vehicles") {
      dispatch({ type: "add_vehicles", payload: { vehicles: elements } });
    } else if (type === "species") {
      dispatch({ type: "add_species", payload: { species: elements } });
    } else if (type === "starships") {
      dispatch({ type: "add_starships", payload: { starships: elements } });
    } else {
      throw new Error("Unknown type: " + type);
    }
    return data.results;
  };

  //   const getVehicles = async () => {
  //     if (store.vehicles.length > 0) {
  //       return store.vehicles;
  //     }
  //     const response = await fetch(
  //       "https://www.swapi.tech/api/vehicles/?expanded=true"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Fetch error: " + response.statusText);
  //     }
  //     const data = await response.json();
  //     dispatch({ type: "add_vehicles", payload: { vehicles: data.results } });
  //     return data.results;
  //   };

  //   const getSpecies = async () => {
  //     if (store.species.length > 0) {
  //       return store.species;
  //     }
  //     const response = await fetch(
  //       "https://www.swapi.tech/api/species/?expanded=true"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Fetch error: " + response.statusText);
  //     }
  //     const data = await response.json();
  //     dispatch({ type: "add_species", payload: { species: data.results } });
  //     return data.results;
  //   };

  //   const getStarships = async () => {
  //     if (store.starships.length > 0) {
  //       return store.starships;
  //     }
  //     const response = await fetch(
  //       "https://www.swapi.tech/api/starships/?expanded=true"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Fetch error: " + response.statusText);
  //     }
  //     const data = await response.json();
  //     dispatch({ type: "add_starships", payload: { starships: data.results } });
  //     return data.results;
  //   };

  return {
    // getPeople,
    // getPlanets,
    // getVehicles,
    // getSpecies,
    // getStarships,
    getElements,
  };
};
