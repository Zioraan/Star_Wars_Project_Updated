export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    species: [],
    starships: [],
    favorites: {
      people: [],
      planets: [],
      vehicles: [],
      species: [],
      starships: [],
    },
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_people":
      const { people } = action.payload;

      return {
        ...store,
        people: people,
      };
    case "add_planets":
      const { planets } = action.payload;

      return {
        ...store,
        planets: planets,
      };
    case "add_vehicles":
      const { vehicles } = action.payload;

      return {
        ...store,
        vehicles: vehicles,
      };
    case "add_species":
      const { species } = action.payload;

      return {
        ...store,
        species: species,
      };
    case "add_starships":
      const { starships } = action.payload;

      return {
        ...store,
        starships: starships,
      };
    case "toggle_favorite":
      const { type: favoriteType, element } = action.payload;
      console.log("running dispatch");

      const alreadyFavorite = store.favorites[favoriteType].some(
        (obj) => obj.uid === element.uid
      );

      return {
        ...store,
        favorites: {
          ...store.favorites,
          [favoriteType]: alreadyFavorite
            ? store.favorites[favoriteType].filter(
                (obj) => obj.uid !== element.uid
              )
            : [...store.favorites[favoriteType], element],
        },
      };
    default:
      throw Error("Unknown action.");
  }
}
