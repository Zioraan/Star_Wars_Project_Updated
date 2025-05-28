import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useActions } from "../actions.js";
import { Carousel } from "../components/Carousel.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const { getPeople, getPlanets, getVehicles, getSpecies, getStarships } =
    useActions();

  useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
    getSpecies();
    getStarships();
  }, []);

  return (
    <div className="text-center text-light mt-5">
      <h1>Star Wars Blog</h1>
      <p className="lead">
        Welcome to the Star Wars Blog! Explore the galaxy far, far away.
      </p>
      <div>
        <h3 className="my-3">People</h3>
        <Carousel array={store.people} type="people" />
      </div>
      <div>
        <h3 className="my-3">Planets</h3>
        <Carousel array={store.planets} type="planets" />
      </div>
      <div>
        <h3 className="my-3">Species</h3>
        <Carousel array={store.species} type="species" />
      </div>
      <div>
        <h3 className="my-3">Vehicles</h3>
        <Carousel array={store.vehicles} type="vehicles" />
      </div>
      <div>
        <h3 className="my-3">Starships</h3>
        <Carousel array={store.starships} type="starships" />
      </div>
    </div>
  );
};
