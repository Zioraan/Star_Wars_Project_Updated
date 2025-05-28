import useGlobalReducer from "./hooks/useGlobalReducer.jsx";

export const useActions = () => {
  const { store, dispatch } = useGlobalReducer();

  const getPeople = async () => {
    if (store.people.length > 0) {
      return store.people;
    }
    const response = await fetch(
      "https://www.swapi.tech/api/people/?expanded=true"
    );
    if (!response.ok) {
      throw new Error("Fetch error: " + response.statusText);
    }
    const data = await response.json();
    dispatch({ type: "add_people", payload: { people: data.results } });
    return data.results;
  };

  const getPlanets = async () => {
    if (store.planets.length > 0) {
      return store.planets;
    }
    const response = await fetch(
      "https://www.swapi.tech/api/planets/?expanded=true"
    );
    if (!response.ok) {
      throw new Error("Fetch error: " + response.statusText);
    }
    const data = await response.json();
    dispatch({ type: "add_planets", payload: { planets: data.results } });
    return data.results;
  };

  const getVehicles = async () => {
    if (store.vehicles.length > 0) {
      return store.vehicles;
    }
    const response = await fetch(
      "https://www.swapi.tech/api/vehicles/?expanded=true"
    );
    if (!response.ok) {
      throw new Error("Fetch error: " + response.statusText);
    }
    const data = await response.json();
    dispatch({ type: "add_vehicles", payload: { vehicles: data.results } });
    return data.results;
  };

  const getSpecies = async () => {
    if (store.species.length > 0) {
      return store.species;
    }
    const response = await fetch(
      "https://www.swapi.tech/api/species/?expanded=true"
    );
    if (!response.ok) {
      throw new Error("Fetch error: " + response.statusText);
    }
    const data = await response.json();
    dispatch({ type: "add_species", payload: { species: data.results } });
    return data.results;
  };

  const getStarships = async () => {
    if (store.starships.length > 0) {
      return store.starships;
    }
    const response = await fetch(
      "https://www.swapi.tech/api/starships/?expanded=true"
    );
    if (!response.ok) {
      throw new Error("Fetch error: " + response.statusText);
    }
    const data = await response.json();
    dispatch({ type: "add_starships", payload: { starships: data.results } });
    return data.results;
  };

  return {
    getPeople,
    getPlanets,
    getVehicles,
    getSpecies,
    getStarships,
  };
};
