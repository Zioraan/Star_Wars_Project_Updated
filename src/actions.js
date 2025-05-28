import useGlobalReducer from "./hooks/useGlobalReducer.jsx";

export const useActions = () => {
  const { store, dispatch } = useGlobalReducer();

  const getPeople = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/people/?expanded=true"
    );
    const data = await response.json();
    dispatch({ type: "add_people", payload: { people: data.results } });
    return data.results;
  };

  const getPlanets = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/planets/?expanded=true"
    );
    const data = await response.json();
    dispatch({ type: "add_planets", payload: { planets: data.results } });
    return data.results;
  };

  const getVehicles = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/vehicles/?expanded=true"
    );
    const data = await response.json();
    dispatch({ type: "add_vehicles", payload: { vehicles: data.results } });
    return data.results;
  };

  const getSpecies = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/species/?expanded=true"
    );
    const data = await response.json();
    dispatch({ type: "add_species", payload: { species: data.results } });
    return data.results;
  };

  const getStarships = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/starships/?expanded=true"
    );
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
